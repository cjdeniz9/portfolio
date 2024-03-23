import Link from "@mui/material/Link";

import CopyrightIcon from "@mui/icons-material/Copyright";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
  return (
    <div className="w-5/6">
      <div className="w-full border-[1px] border-[#2d2d2d] mb-8" />
      <div className="flex w-full justify-between">
        <div>
          <CopyrightIcon fontSize="small" />
          <span className="xl:text-xs text-sm font-light">
            {" "}
            2024 Christian Deniz
          </span>
        </div>
        <div className="flex w-16 justify-between">
          <Link href="https://linkedin.com/in/christian-deniz">
            <LinkedInIcon className="text-[#666666] hover:text-green-50" />
          </Link>
          <Link href="https://github.com/cjdeniz9">
            <GitHubIcon className="text-[#666666] hover:text-green-50" />
          </Link>
        </div>
      </div>
    </div>
  );
}
