import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

const routes = [
  { path: "/", breadcrumb: "Home" },
  { path: "/games", breadcrumb: "Games" },
  { path: "/games/:slug" },
];

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs(routes);

  return (
    <>
      <Breadcrumb fontWeight="medium" fontSize="sm">
        {breadcrumbs.map(({ match, breadcrumb }) => (
          <BreadcrumbItem key={match.pathname}>
            <BreadcrumbLink as={Link} to={match.pathname}>
              {breadcrumb}
            </BreadcrumbLink>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    </>
  );
};

export default Breadcrumbs;
