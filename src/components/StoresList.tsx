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

  const storeIdMap: { [key: string]: string } = {
    1: "steam",
    2: "microsoft",
    3: "playstation",
    4: "apple",
    5: "gog",
    6: "nintendo",
    7: "xbox",
    8: "googleplay",
    11: "epicgames",
  };

  if (isLoading) return <IsLoadingSpinner />;

  if (error) throw error;

  if (stores?.count === 0) return null;

  return (
    <>
      <SimpleGrid as="dl">
        <DefinitionItem term="Stores">
          <HStack marginY={5}>
            {stores?.results.map((item) => {
              return (
                <Link key={item.store_id} href={item.url} isExternal={true}>
                  <Icon
                    as={iconMap[storeIdMap[item.store_id]]}
                    boxSize={10}
                    color="gray.500"
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
