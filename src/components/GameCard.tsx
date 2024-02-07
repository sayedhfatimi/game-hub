import { Game } from "../entities/Game";
import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  HStack,
  Heading,
  Image,
} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Link to={"/games/" + game.slug}>
        <Card>
          <Image src={getCroppedImageUrl(game.background_image)} />
          <CardBody>
            <HStack justifyContent="space-between">
              <PlatformIconList
                platforms={game.parent_platforms.map((p) => p.platform)}
              />
              <CriticScore score={game.metacritic} />
            </HStack>
          </CardBody>
          <Divider />
          <CardFooter>
            <Heading fontSize="l">{game.name}</Heading>
          </CardFooter>
        </Card>
      </Link>
    </>
  );
};

export default GameCard;
