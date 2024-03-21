import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import LinkIcon from "@mui/icons-material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";

import Tracker from "../../../assets/tracker.PNG";
import Inventory from "../../../assets/inventory.PNG";
import Ecommerce from "../../../assets/ecommerce.PNG";

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "Tracker",
      githubURL: "https://github.com/cjdeniz9/InventoryTracker",
      websiteURL: "https://inv-tracker.netlify.app/",
      img: Tracker,
      desc: "Created an inventory management software to accelerate workflow with automation and concise management all in one platform.",
    },
    {
      id: 2,
      name: "Inventory Management",
      githubURL: "https://github.com/cjdeniz9/Inventory",
      websiteURL: "https://inventory-tracker.pages.dev/home",
      img: Inventory,
      desc: "Developed a dynamic website to track inventory to present performance metrics in a clear and actionable format.",
    },
    {
      id: 3,
      name: "E-Commerce",
      githubURL: "https://github.com/cjdeniz9/eCommerce",
      websiteURL: "",
      img: Ecommerce,
      desc: "Designed a product catalog management systems to enable efficient organization and search functionality for a range of products.",
    },
  ];
  return (
    <div className="w-5/6">
      <span className="block text-xl mb-8 text-left">Projects</span>
      <div className="flex justify-between">
        {projects.map((item) => {
          return (
            <Card
              key={item.id}
              sx={{
                background:
                  "radial-gradient(100% 100% at 0% 0%, hsla(0, 0%, 100%, .03), transparent)",
                border: "1px solid #2d2d2d",
                width: "32.5%",
                paddingY: ".75rem",
                paddingX: "1.25rem",
              }}
            >
              <CardContent sx={{ width: "100%" }}>
                <Typography
                  sx={{
                    backgroundClip: "text",
                    backgroundImage:
                      "linear-gradient(to top, #58ffb4, #289061)",
                    color: "transparent",
                    fontWeight: "600",
                    fontSize: "18px",
                    lineHeight: "1.75rem",
                    marginBottom: "1.25rem",
                    textAlign: "left",
                  }}
                >
                  {item.name}
                </Typography>
                <Link href={item.websiteURL}>
                  <img
                    src={item.img}
                    alt="Project img"
                    className="border-[1px] border-[#d3d3d3] rounded mb-6"
                  />
                </Link>
                <Typography
                  sx={{ color: "#fff", fontWeight: "500", textAlign: "left" }}
                >
                  {item.desc}
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <Link href={item.githubURL}>
                  <Button
                    sx={{
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    <GitHubIcon className="text-[#666666] hover:text-green-50" />
                  </Button>
                </Link>
                {item.websiteURL === "" ? (
                  ""
                ) : (
                  <Link href={item.websiteURL}>
                    <Button
                      sx={{
                        "&:hover": {
                          backgroundColor: "transparent",
                        },
                      }}
                    >
                      <LinkIcon className="text-[#666666] hover:text-green-50" />
                    </Button>
                  </Link>
                )}
              </CardActions>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
