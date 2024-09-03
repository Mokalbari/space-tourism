import { bellefair, barlowCondensed } from "../ui/fonts"

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section>
        <h1 className={`${bellefair.className} text-3xl uppercase`}>Earth</h1>
        <h2 className={`${bellefair.className} text-2xl uppercase`}>Venus</h2>
        <h3 className={`${bellefair.className} text-xl uppercase`}>
          Jupiter & Venus
        </h3>
        <h4 className={`${bellefair.className} my-12 text-lg uppercase`}>
          Uranus, Neptune, Pluto
        </h4>
        <h5
          className={`${barlowCondensed.className} text-md text-blue uppercase tracking-wider`}
        >
          Haumea Sedna Eris & Ceres
        </h5>
        <div className={`${bellefair.className} text-md mt-8 uppercase`}>
          384.400km
        </div>
        <div
          className={`${barlowCondensed.className} text-2xs mt-8 uppercase tracking-wide`}
        >
          Avg.distance
        </div>
        <div
          className={`${barlowCondensed.className} mt-8 text-xs uppercase tracking-wide`}
        >
          Europa
        </div>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          culpa, commodi minima iste fuga quo, deleniti maxime ut explicabo
          dolores praesentium hic necessitatibus voluptatibus debitis voluptas?
          Qui accusantium quam modi repudiandae beatae et doloribus, est tempore
          porro quidem dolorem illo ut? Delectus aliquid sunt expedita eveniet
          harum iste tempora. Est.
        </p>
      </section>
      <section className="mt-8">
        <h4 className={`${bellefair.className} text-m uppercase`}>
          Uranus, Neptune, Pluto
        </h4>
        <p className="text-s">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
          voluptas perferendis voluptatibus quidem, ab nisi inventore assumenda
          temporibus earum est ipsam pariatur et laudantium, laboriosam
          architecto. Veniam, facilis omnis veritatis est nihil quidem, aliquid
          impedit ea, nesciunt mollitia illo dicta illum cumque quasi error unde
          fuga doloremque optio laborum. Possimus?
        </p>
      </section>
    </div>
  )
}
