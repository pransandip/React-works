// * Importing localized strings
import strings from "../Language/word_cloud.json";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const list = [
    strings.word_vec0,
    strings.word_vec1,
    strings.word_vec2,
    strings.word_vec3,
  ];
  return list[Math.floor(Math.random() * list.length)];
};
