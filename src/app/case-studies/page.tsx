import type { Metadata } from "next";
import CaseStudiesExplorer from "@/components/case-studies/CaseStudiesExplorer";
import { CASE_STUDIES_PAGE_DATA } from "@/lib/site-data";

export const metadata: Metadata = {
  title: CASE_STUDIES_PAGE_DATA.meta.title,
  description: CASE_STUDIES_PAGE_DATA.meta.description,
};

export default function CaseStudiesPage() {
  return (
    <main>
      <CaseStudiesExplorer />
    </main>
  );
}
