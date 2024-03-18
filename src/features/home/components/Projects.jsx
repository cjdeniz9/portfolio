import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import LinkIcon from "@mui/icons-material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "Tracker",
      githubURL: "https://github.com/cjdeniz9/InventoryTracker",
      websiteURL: "https://inv-tracker.netlify.app/",
    },
    {
      id: 2,
      name: "Inventory Management",
      githubURL: "https://github.com/cjdeniz9/Inventory",
      websiteURL: "https://inventory-tracker.pages.dev/home",
    },
    {
      id: 3,
      name: "E-Commmerce",
      githubURL: "https://github.com/cjdeniz9/eCommerce",
      websiteURL: "",
    },
  ];
  return (
    <div className="w-4/5">
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
                width: "32%",
                paddingY: "1rem",
              }}
            >
              <CardContent>
                <Typography
                  sx={{
                    color: "#289061",
                    fontWeight: "600",
                    textTransform: "uppercase",
                  }}
                >
                  {item.name}
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
