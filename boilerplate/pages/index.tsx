import Meta from "app/meta";
import links from "app/links";
import pages from "app/pages";

export default pages.index.page(() => {
  return (
    <div>
      <Meta
        title="Ut ut ipsum pellentesque"
        description="Cras sapien risus, gravida eu dictum non, tempus eget nisl. Nunc id pulvinar elit, quis faucibus neque. Morbi eget placerat diam. Pellentesque in neque sollicitudin, aliquet arcu quis, tristique dui. Vivamus gravida nulla quis arcu varius, at tincidunt felis fringilla."
        image=""
        keywords={["Phasellus", "ornare", "eros", "vel"]}
        url={links.index.href}
      />
      <section id="banner"></section>
      <section id="item-list"></section>
      <section id="banner-with-button"></section>
    </div>
  );
});

export const priority = pages.index.priority(0.9);
export const disallow = pages.index.disallow(false);
export const changeFrequency = pages.index.changeFrequency("hourly");
export const getLastModificationDate = pages.index.getLastModificationDate(
  async () => new Date(),
);
