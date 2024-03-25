import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
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
      desc: "Developed a dynamic website to manage inventory by presenting financial performance metrics in a clear and actionable format.",
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
      <span className="xl:text-xl md:mb-10 block text-2xl text-white-50 mb-8 text-left">
        Projects
      </span>
      <div className="xl:flex grid gap-6 grid-rows-3">
        {projects.map((item) => {
          return (
            <Card
              key={item.id}
              sx={{
                background:
                  "radial-gradient(100% 100% at 0% 0%, hsla(0, 0%, 100%, .03), transparent)",
                border: "1px solid #2d2d2d",
                width: { lg: "32.5%" },
                paddingY: { xs: ".75rem", sm: "1.50rem", lg: ".75rem" },
                paddingX: { xs: ".75rem", sm: "1.5rem", lg: "1.25rem" },
              }}
            >
              <CardContent>
                <Typography
                  sx={{
                    backgroundClip: "text",
                    backgroundImage:
                      "linear-gradient(to top, #58ffb4, #289061)",
                    color: "transparent",
                    fontWeight: "600",
                    fontSize: {
                      xs: "20px",
                      sm: "24px",
                      md: "28px",
                      lg: "18px",
                    },
                    lineHeight: "1.75rem",
                    marginBottom: {
                      xs: "1.25rem",
                      sm: "1.75rem",
                      lg: "1.25rem",
                    },
                    textAlign: "left",
                  }}
                >
                  {item.name}
                </Typography>
                <Link href={item.websiteURL}>
                  <img
                    src={item.img}
                    alt="Project img"
                    className="xl:my-0 xl:mb-6 md:my-8 border-[1px] border-[#d3d3d3] rounded my-6"
                  />
                </Link>
                <Typography
                  sx={{
                    color: "#fff",
                    fontWeight: "500",
                    fontSize: {
                      xs: "18px",
                      sm: "20px",
                      md: "22px",
                      lg: "14px",
                    },
                    marginBottom: { md: ".75rem", lg: "0rem" },
                    textAlign: "left",
                  }}
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
                    <GitHubIcon
                      sx={{
                        color: "#666666",
                        fontSize: { xs: "26px", lg: "22px" },
                        "&:hover": {
                          color: "#58ffb4",
                        },
                      }}
                    />
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
                      <LinkIcon
                        sx={{ fontSize: { xs: "30px", lg: "28px" } }}
                        className="text-[#666666] hover:text-green-50"
                      />
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
