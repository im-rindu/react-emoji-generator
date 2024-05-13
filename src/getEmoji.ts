export const getEmoji = async () => {
  const res = await fetch(
    "https://emojihub.yurace.pro/api/all/group/face-positive"
  );
  const data = await res.json();
  const res2 = await fetch(
    "https://emojihub.yurace.pro/api/all/group/face-negative"
  );
  const data2 = await res2.json();
  const res3 = await fetch(
    "https://emojihub.yurace.pro/api/all/group/face-neutral"
  );
  const data3 = await res3.json();
  const data4 = [...data, ...data2, ...data3];
  return data4
    .map(({ htmlCode, name }: { htmlCode: string[]; name: string }) => [
      htmlCode[0],
      name,
    ])
    .sort(() => Math.random() - 0.5);
};
