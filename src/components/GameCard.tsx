import { Game } from "../hooks/useGames";
import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  HStack,
  Heading,
  Icon,
  Image,
  Link,
  Tooltip,
} from "@chakra-ui/react";
import { FaSteam } from "react-icons/fa";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import useStores from "../hooks/useStores";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const { data } = useStores(game.slug);
  const steam = data.filter((store) => store.store_id === 1);

  return (
    <>
      <Card>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          <HStack justifyContent="space-between" marginBottom={3}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Divider />
          <HStack align="center" paddingTop={5}>
            <Tooltip label="Steam">
              <Link href={steam[0]?.url}>
                <Icon as={FaSteam} boxSize={10} color="gray.300" />
              </Link>
            </Tooltip>
          </HStack>
        </CardBody>
        <Divider />
        <CardFooter>
          <Heading fontSize="l">{game.name}</Heading>
        </CardFooter>
      </Card>
    </>
  );
};

export default GameCard;
