import { useState, useEffect } from "react";
import { getEmoji } from "./getEmoji";

const EmojiPage = () => {
  const [refresh, setRefresh] = useState(false);
  const [emoji, setEmoji] = useState<string[][]>([]);

  const fetchData = async () => {
    const emojiData = await getEmoji();
    setEmoji(emojiData);
    console.log(emojiData);
  };

  useEffect(() => {
    if (refresh) {
      const timer = setTimeout(() => {
        setRefresh(!refresh);
        localStorage.setItem("emoji", emoji[emoji.length - 1][0]);
        localStorage.setItem("name", emoji[emoji.length - 1][1]);
      }, 9999);
      return () => {
        clearTimeout(timer);
        document.getElementById("parDiv")?.classList.remove("animation-scroll");
        fetchData();
      };
    }
  }, [refresh, emoji]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="h-screen w-screen">
      <article
        id="parDiv"
        className="h-full w-[6700%] overflow-x-scroll scroll-smooth grid grid-cols-67"
      >
        <div className="snap-center flex justify-center w-full">
          <section className="flex h-screen w-screen items-center justify-center">
            <a
              href="#"
              onClick={() => {
                const parDiv = document.getElementById("parDiv");
                if (parDiv) {
                  parDiv.classList.add("animation-scroll");
                  setRefresh(true);
                }
              }}
            >
              <div
                className="text-9xl p-8"
                dangerouslySetInnerHTML={{
                  __html: localStorage?.getItem("emoji") || "&#128515;",
                }}
              />
            </a>
            <p className="absolute bottom-[25%] w-4/5 mt-12 text-[#4C9BB9] font-bold text-center">
              You’re have a {localStorage?.getItem("name") || "Smiley Face"}{" "}
              today
            </p>
          </section>
          {emoji.map((theEmoji, index) => (
            <section
              id={`${index}`}
              key={index}
              className="flex h-screen w-screen items-center justify-center p-8"
            >
              <div
                className="text-9xl p-12"
                dangerouslySetInnerHTML={{ __html: theEmoji[0] }}
              />
            </section>
          ))}
        </div>
      </article>
    </div>
  );
};
export default EmojiPage;
