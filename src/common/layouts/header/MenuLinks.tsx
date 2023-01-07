import { chakra, Stack, List, ListItem, Box } from "@chakra-ui/react";
import Link from "next/link";

type MenuLinksProps = { isOpen: boolean; onClick: () => void };

const links = [
  { url: "/", label: "Home" },
  { url: "/", label: "Gallery" },
  { url: "/contact-us", label: "Contact Us" },
  { url: "/articles", label: "News" },
  { url: "/restaurant", label: "Restaurant" },
  {
    url: "/book",
    label: "Book",
    style: { color: "yellow.500", fontWeight: "bold" },
  },
];

export const MenuLinks = ({ isOpen, onClick }: MenuLinksProps) => {
  return (
    <Box width={["100%", "100%", "fit-content"]}>
      <chakra.nav
        flexBasis={{ base: "100%", md: "auto" }}
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        marginTop={2}
      >
        <List>
          <Stack
            direction={["column", "column", "row"]}
            spacing={[4, 4, 4, 8]}
            flexDirection={["column", "column", "row"]}
            alignItems={["center", "center", "flex-start"]}
            justifyContent={{ sm: "center" }}
            paddingTop={[8, 8, 0]}
          >
            {links.map((link) => (
              <ListItem
                key={link.label}
                color={link?.style?.color}
                fontWeight={link?.style?.fontWeight}
                _hover={{ textDecoration: "underline" }}
              >
                <Link href={link.url} onClick={onClick}>
                  {link.label}
                </Link>
              </ListItem>
            ))}
          </Stack>
        </List>
      </chakra.nav>
    </Box>
  );
};
