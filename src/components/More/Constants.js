export const DummyText =
  "Lorem ipsum dolor sit amet. Ab culpa optio eos quidem suscipit aut ..."
export const cardArr = Array(4)
  .fill("")
  .map((_, i) => {
    return {
      text: DummyText,
      title: `מאמר ${i + 1}`,
    }
  })
