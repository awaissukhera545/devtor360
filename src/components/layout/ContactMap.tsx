"use client";

import { useEffect, useRef } from "react";
import { MapPin } from "lucide-react";

// ── Map config ────────────────────────────────────────────────────────────────
const OFFICE = {
  lat: 31.47831,
  lng: 74.28144,
  label: "Devtor360 HQ",
  plusCode: "F7HJ+8H Lahore, Pakistan",
  address: "Abdul Haq Road, Johar Town, Lahore, Pakistan",
  detail: "Plus Code: F7HJ+8H",
};

// ── Leaflet Map (browser-only) ────────────────────────────────────────────────
export default function ContactMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const instanceRef = useRef<import("leaflet").Map | null>(null);

  useEffect(() => {
    if (instanceRef.current) return; // already initialised

    let L: typeof import("leaflet");

    async function initMap() {
      // Dynamic import keeps Leaflet out of the SSR bundle
      L = (await import("leaflet")).default;

      // ── Fix Leaflet's broken default icon paths under bundlers ──────────
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        iconRetinaUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      if (!mapRef.current || instanceRef.current) return;

      const map = L.map(mapRef.current, {
        center: [OFFICE.lat, OFFICE.lng],
        zoom: 14,
        zoomControl: true,
        scrollWheelZoom: false, // friendlier UX on page scroll
        attributionControl: true,
      });

      instanceRef.current = map;

      // OpenStreetMap tiles — free, no API key needed
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      // Custom branded marker
      const icon = L.divIcon({
        html: `
          <div style="
            width:40px;height:40px;
            background:#006bf2;
            border-radius:50% 50% 50% 0;
            transform:rotate(-45deg);
            border:3px solid #ffffff;
            box-shadow:0 4px 16px rgba(0,107,242,0.40);
          "></div>
        `,
        className: "",
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -44],
      });

      L.marker([OFFICE.lat, OFFICE.lng], { icon })
        .addTo(map)
        .bindPopup(
          `<div style="font-family:inherit;padding:4px 2px;min-width:180px;">
            <p style="font-weight:700;font-size:14px;color:#090e17;margin:0 0 4px;">${OFFICE.label}</p>
            <p style="font-size:12px;color:#006bf2;font-weight:600;margin:0 0 2px;">${OFFICE.plusCode}</p>
            <p style="font-size:12px;color:#64748b;margin:0;">${OFFICE.address}</p>
          </div>`,
          { maxWidth: 260, className: "devtor-popup" }
        )
        .openPopup();
    }

    initMap();

    return () => {
      instanceRef.current?.remove();
      instanceRef.current = null;
    };
  }, []);

  return (
    <section aria-label="Our location on map" className="pt-2 pb-10 sm:pt-4 sm:pb-14">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        {/* ── Section header ─────────────────────────────────────────────── */}
        <div className="mb-8 flex flex-col items-center gap-3 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
          <div>
            <p className="text-eyebrow uppercase text-primary">Find Us</p>
            <h2 className="mt-2 text-[1.75rem] font-bold leading-tight text-foreground sm:text-[2rem]">
              Our Office Location
            </h2>
          </div>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${OFFICE.lat},${OFFICE.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 text-sm font-semibold text-foreground shadow-xs transition-all hover:border-primary hover:text-primary"
          >
            <MapPin size={14} />
            Open in Google Maps
          </a>
        </div>

        {/* ── Map wrapper ────────────────────────────────────────────────── */}
        <div className="relative overflow-hidden rounded-2xl border border-border shadow-dock">
          {/* Address pill overlay */}
          <div className="absolute left-4 top-4 z-1000 flex items-center gap-2 rounded-full border border-border bg-white/95 px-4 py-2 shadow-md backdrop-blur-sm">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
              <MapPin size={12} className="text-white" />
            </span>
            <div>
              <span className="block text-xs font-semibold text-foreground leading-tight">
                {OFFICE.detail}
              </span>
              <span className="block text-[10px] text-muted-foreground leading-tight">
                {OFFICE.address}
              </span>
            </div>
          </div>

          {/* Leaflet mount point */}
          <div
            ref={mapRef}
            className="h-90 w-full sm:h-110 lg:h-125"
            aria-label="Interactive map showing Devtor360 office location"
          />
        </div>
      </div>
    </section>
  );
}
