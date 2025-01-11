import { useEffect, useState } from "react";
import { ScrollRestoration } from "react-router-dom";
import { ImageSuit, LIST_STEP } from "../interface";
import { getCoverURL, scroll2Bottom } from "../utils";
import ViewerModal from "../components/viewer-modal";

interface SuitListProps {
  images: ImageSuit[];
  scrollRestore?: boolean;
}

const SuitList = ({ images, scrollRestore = false }: SuitListProps) => {
  const [index, setIndex] = useState(2);
  const [shownImages, setShownImages] = useState(
    images.slice(0, LIST_STEP * (index - 1))
  );

  const [open, setOpen] = useState(false);
  const cls = open
    ? "p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 invisible"
    : "p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4";
  const [data, setData] = useState<ImageSuit | null>({
    id: 0,
    name: "",
    count: 0,
    prefix: "",
    time: new Date(0),
  });

  const handleImageClick = (img: ImageSuit) => {
    window.history.pushState(null, "", window.location.href);
    setOpen(true);
    setData(img);
  };

  const onModalClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handlePopState = () => {
      setOpen(false);
    };

    const handler = () => {
      if (scroll2Bottom() && images.length - (index - 1) * LIST_STEP > 0) {
        setIndex(index + 1);
        setShownImages(images.slice(0, LIST_STEP * index));
      }
    };

    window.addEventListener("scroll", handler);
    window.onpopstate = handlePopState;

    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("popstate", handlePopState);
      if (window.history.state === null) {
        window.history.back();
      }
    };
  }, [images, index]);

  return (
    <>
      <div className={cls}>
        {shownImages.map((img) => (
          <img
            key={img.id}
            src={getCoverURL(img.id, img.prefix)}
            onClick={() => {
              handleImageClick(img);
            }}
          />
        ))}
      </div>

      <ViewerModal isOpen={open} onClose={onModalClose} data={data!} />
      {scrollRestore && <ScrollRestoration />}
    </>
  );
};

export default SuitList;
