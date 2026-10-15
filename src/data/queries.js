import content from "./content";
import comments from "./comments";
import { episodes } from "./episodes";
import { seasons } from "./seasons";

export function getContentWithComments(contentId) {
  const item = content.find((item) => item.id === contentId);

  if (!item) return undefined;

  return {
    ...item,
    comments: comments.filter(
      (comment) => comment.contentId === item.id
    ),
  };
}

export function getEpisodesBySeason(seasonId) {
  return episodes.filter(
    (episode) => episode.seasonId === seasonId
  );
}