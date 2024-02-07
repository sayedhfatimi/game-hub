import { HStack, Icon, Link, SimpleGrid } from "@chakra-ui/react";
import useStores from "../hooks/useStores";
import IsLoadingSpinner from "./IsLoadingSpinner";
import DefinitionItem from "./DefinitionItem";
import {
  FaApple,
  FaGooglePlay,
  FaMicrosoft,
  FaPlaystation,
  FaSteam,
  FaXbox,
} from "react-icons/fa";
import { IconType } from "react-icons";
import { SiEpicgames, SiGogdotcom } from "react-icons/si";
import { BsNintendoSwitch } from "react-icons/bs";

interface Props {
  slug: string;
}

const StoresList = ({ slug }: Props) => {
  const { data: stores, isLoading, error } = useStores(slug!);
  let storeSlug = "";

  const iconMap: { [key: string]: IconType } = {
    playstation: FaPlaystation,
    xbox: FaXbox,
    steam: FaSteam,
    gog: SiGogdotcom,
    epicgames: SiEpicgames,
    microsoft: FaMicrosoft,
    apple: FaApple,
    googleplay: FaGooglePlay,
    nintendo: BsNintendoSwitch,
  };

  if (isLoading) return <IsLoadingSpinner />;

  if (error) throw error;

  return (
    <>
      <SimpleGrid as="dl">
        <DefinitionItem term="Stores">
          <HStack marginY={5}>
            {stores?.results.map((item) => {
              switch (item.store_id) {
                case 1: // Steam Store id
                  storeSlug = "steam";
                  break;
                case 2: // Microsoft Store id
                  storeSlug = "microsoft";
                  break;
                case 3: // Playstation Store id
                  storeSlug = "playstation";
                  break;
                case 4: // Apple App Store id
                  storeSlug = "apple";
                  break;
                case 5: // GOG Store id
                  storeSlug = "gog";
                  break;
                case 6: // Nintendo Store id
                  storeSlug = "nintendo";
                  break;
                case 7: // Xbox Marketplace Store id
                  storeSlug = "xbox";
                  break;
                case 8: // Google Play Store id
                  storeSlug = "googleplay";
                  break;
                case 11: // Epic Games id
                  storeSlug = "epicgames";
                  break;
              }

              return (
                <Link key={item.store_id} href={item.url} isExternal={true}>
                  <Icon
                    as={iconMap[storeSlug]}
                    boxSize={10}
                    color="white"
                    marginRight={4}
                    _hover={{
                      transform: "scale(1.5)",
                      transition: "transform .15s ease-in-out",
                    }}
                  />
                </Link>
              );
            })}
          </HStack>
        </DefinitionItem>
      </SimpleGrid>
    </>
  );
};

export default StoresList;
