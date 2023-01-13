import { useEffect, useState } from "react";
import useAraSaac from "../../hooks/useAraSaac";

interface PictogramWordProps {
  pictogram: number;
}

const PictogramWord = ({ pictogram }: PictogramWordProps): JSX.Element => {
  const { getWordPictogram } = useAraSaac();

  const initialWord = "";

  const [word, setWord] = useState(initialWord);

  useEffect(() => {
    (async () => {
      const wordPictogram = await getWordPictogram(pictogram);
      setWord(wordPictogram);
    })();
  }, [getWordPictogram, pictogram]);

  return <span className="text-uppercase mt-2">{word}</span>;
};

export default PictogramWord;
