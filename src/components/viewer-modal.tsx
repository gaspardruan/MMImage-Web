import { useEffect, useRef } from "react";
import { Classes, Overlay2 } from "@blueprintjs/core";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import PhotoSwipe from "photoswipe";
import { getImages } from "../utils";
import { ImageSuit } from "../interface";

interface ViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: ImageSuit;
}

const ViewerModal = ({ isOpen, onClose, data }: ViewerModalProps) => {
  const flag = useRef(false);

  useEffect(() => {
    if (!isOpen) return;
    const loadImages = () => {
      const div = document.querySelector("#gallery-" + data.id);
      getImages(data).forEach(async (i) => {
        const img = await i;
        const a = document.createElement("a");
        a.href = img.src;
        a.setAttribute("data-pswp-width", img.width.toString());
        a.setAttribute("data-pswp-height", img.height.toString());
        a.target = "_blank";
        a.rel = "noreferer";
        a.setAttribute("key", img.src);
        const imgElement = document.createElement("img");
        imgElement.src = img.src;
        a.appendChild(imgElement);
        div!.appendChild(a);
      });
    };
    loadImages();
    flag.current = true;

    let lightbox: PhotoSwipeLightbox | null = new PhotoSwipeLightbox({
      bgOpacity: 1,
      tapAction: "next",
      loop: false,
      gallery: "#gallery-" + data.id,
      children: "a",
      pswpModule: PhotoSwipe,
    });

    lightbox.init();

    return () => {
      lightbox!.destroy();
      lightbox = null;
    };
  }, [data.id, data, isOpen]);

  return (
    <Overlay2
      className={Classes.OVERLAY_SCROLL_CONTAINER}
      isOpen={isOpen}
      onClose={onClose}
      lazy={false}
      canOutsideClickClose
    >
      <div
        id={"gallery-" + data.id}
        className="p-4 grid grid-cols-3 gap-4"
      ></div>
    </Overlay2>
  );
};

export default ViewerModal;
