import EmojiPage from "./EmojiPage";

const App = () => (
  <div className="bg-yellow-100 flex max-h-screen flex-col items-center justify-center px-12 overflow-y-hidden">
    <h1 className="absolute top-[15%] w-4/5 text-3xl font-bold text-center text-[#4C9BB9]">
      What&apos;s Your <span className="text-[#1C5469]">Emoji</span> Today
    </h1>
    <p className="absolute top-[25%] w-4/5 mt-8 mb-12 text-center text-[#1C5469] font-bold">
      Click The Emoji!
    </p>
    <EmojiPage />
  </div>
);

export default App;
