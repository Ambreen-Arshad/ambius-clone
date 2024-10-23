import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";
import Image from "next/image";
import image2 from "./public/image2.png";
import image3 from "./public/image3.png";
import image4 from "./public/image4.png";
import image5 from "./public/image5.png";
import image6 from "./public/image6.png";
import image7 from "./public/image7.png";
import image8 from "./public/image8.png";

export default async function Home() {
  await new Promise((resolve)=>{
    setTimeout(resolve,2000);
})
  return (
    <div>
      <div>
        <div className="flex gap-4 my-24 px-16 bg-stone-100 text-stone-600">
          <div className="flex items-center gap-2">
            <Link href="https://www.ambius.com/">Home</Link>
            <FaAngleRight size={10} />
          </div>
          <div className="flex items-center gap-2">
            <Link href="https://www.ambius.com/resources">Resource center</Link>
            <FaAngleRight size={10} />
          </div>
          <div className="flex items-center gap-2">
            <Link href="https://www.ambius.com/resources/blog">Blog</Link>
            <FaAngleRight size={10} />
          </div>
          <div className="flex items-center gap-2">
            <Link href="https://www.ambius.com/resources/blog/plant-profile">
              Plant profile
            </Link>
            <FaAngleRight size={10} />
          </div>
          <div className="flex items-center gap-2">
            <Link href="">The Ultimate Guide to Indoor Plants</Link>
          </div>
        </div>
        <div>
          <Image
            src={image2}
            alt="image2"
            width={1400}
            height={600}
            priority
            className="-my-24"
          />
        </div>
        <div className="flex justify-between ">
          <div className="flex w-1/4 max-h-72 justify-center items-center my-44 m-5 text-stone-600 sticky top-0">
            <div className="flex flex-col gap-2">
              <h2>Related blogs</h2>
              <a
                href="https://www.ambius.com/resources/blog/plant-care/indoor-plant-care-tips-for-fall"
                className="hover:underline"
              >
                Indoor plant care tips for fall
              </a>
              <a
                href="https://www.ambius.com/resources/blog/plant-care/why-do-my-plants-lose-color"
                className="hover:underline"
              >
                Why are my plant leaves losing color?
              </a>
              <a
                href="https://www.ambius.com/resources/blog/plant-care/creating-a-winter-garden"
                className="hover:underline"
              >
                Creating a winter garden
              </a>
            </div>
          </div>
          <div className="flex w-3/4 justify-center items-center my-44 m-5 text-stone-500 text-2x1 min-h-screen">
            <div>
              <h1 className="text-[#5f9b24] text-6xl px-5">
                The Ultimate Guide to Indoor Plants
              </h1>
              <br />

              <p className="flex text-3x1">
                Indoor plants should be an essential component of every interior
                design. Greenery brightens up indoor spaces and is known to have
                mood-boosting qualities.
              </p>
              <br />
              <p className="flex text-3x1">
                Indoor plants are popular because they are relatively easy to
                take care of, provide health benefits and can be used in a
                variety of indoor décor themes. Indoor plants are a great option
                for those who have little yard
              </p>
              <br />
              <Image
                src={image3}
                alt="image3"
                width={900}
                height={700}
                priority
                className="m-2 justify-center items-center rounded-lg"
              />
              <br />
              <p>
                space for an outdoor garden or for those who live in climates
                with severely cold winters.
              </p>
              <br />
              <p>
                So, if you’re caring for indoor plants for the first time, our
                ultimate guide will provide you with the necessary information
                to allow your green friends to thrive.
              </p>
              <br />
              <p>
                To provide you with expert insight, we asked our Senior
                Horticulturist at Ambius, Matt Kostelnick, to answer the most
                frequently asked questions about indoor plants.
              </p>
              <br />
              <Image
                src={image4}
                alt="image4"
                width={900}
                height={700}
                priority
                className="m-2 justify-center items-center rounded-lg"
              />
              <br />
              <h2 className="text-stone-700">What are indoor plants?</h2>
              <br />

              <p>
                Indoor plants are plants that grow indoors. There are a variety
                of tropical plants, like palms, that thrive in indoor
                environments.
              </p>
              <br />
              <h2 className="text-stone-700">
                How do you plant indoor plants?
              </h2>
              <br />
              <p>
                Most of the time, indoor plants are already in containers, so
                there is no need to plant them. There are typically only two
                reasons you need to plant an indoor plant.
              </p>
              <br />
              <ol className="list-inside list-decimal">
                <li>
                  If your plant is getting too big, then you will need to
                  <a
                    href="https://www.ambius.com/resources/blog/plant-care/re-potting-houseplants-101"
                    className="hover:underline"
                  >
                    replant it into a larger container.
                  </a>{" "}
                </li>
                <li>
                  If you wanted to grow bulbs indoors, then you will need to
                  plant the bulbs yourself.
                </li>
              </ol>
              <br />
              <Image
                src={image5}
                alt="image5"
                width={900}
                height={700}
                priority
                className="m-2 justify-center items-center rounded-lg"
              />
              <br />
              <h2 className="text-stone-700">
                How much light do indoor plants need?
              </h2>
              <br />
              <p>
                Succulents and cacti need continuous, daily sunlight. Plants
                with foliage need roughly 8 hours of light per day. The amount
                of light depends on the plants you are growing, so we suggest
                doing research on the specific plants you are growing.
              </p>
              <br />
              <h2 className="text-stone-700">
                What qualities make for a good indoor plant?
              </h2>
              <br />
              <p>
                There are several qualities to look for when selecting an indoor
                plant.
              </p>
              <br />
              <ol className="list-inside list-decimal">
                <li>
                  A good root system – This is incredibly important when
                  choosing a plant. It’s not practical to pull a plant out of
                  its pot to check its roots but if it is a{" "}
                  <a
                    href="https://www.ambius.com/plant-design/interior-landscaping"
                    className="hover:underline"
                  >
                    small plant
                  </a>
                  , this can be done. Healthy roots are thick and light in
                  color.
                </li>
                <li>
                  Foliage- Here’s a good rule of thumb when it comes to plant
                  foliage: if you can’t see through it, the foliage is thick
                  enough.
                </li>
                <li>
                  Check for disease – Some signs of a plant with pests or
                  disease are: white dots, sticky residue on the leaves and a
                  bad odor.
                </li>
              </ol>
              <br />
              <h2 className="text-stone-700">
                Which indoor plants require low light?
              </h2>
              <br />
              <p>
                Indoor plants that need little light could be good fits for
                locations where light is dimmer. Some plants that require low
                light are:
              </p>
              <br />
              <ul className="list-inside list-disc">
                <li>
                  <a
                    href="https://www.ambius.com/plant-design/interior-landscaping"
                    className="hover:underline"
                  >
                    Philodendron
                  </a>{" "}
                  – A very common indoor plant that rarely attracts pests. It’s
                  a hearty plant that is adaptable to various environments
                </li>
                <li>
                  Pothos or Devil’s Ivy- A plant with colorful and vibrant
                  leaves. This plant does great in a variety of environments,
                  thriving in low light or in bright, indirect light.
                </li>
                <li>
                  <a
                    href="https://www.ambius.com/resources/blog/plant-profile/five-of-the-most-popular-indoor-plants"
                    className="hover:underline"
                  >
                    Dracaena
                  </a>{" "}
                  This is another popular indoor plant with long green leaves.
                  This is one indoor plant you will want to prune if foliage
                  gets too long.
                </li>
                <li>
                  Peace Lily- This plant thrives best when the soil is moist,
                  but not overwatered. If you want flowers to appear on your
                  peace lily plant, move your plant to a darker room.
                </li>
              </ul>
              <br />
              <h2 className="text-stone-700">
                Which indoor plants are the easiest to take care of?
              </h2>
              <br />
              <p>
                Below is a list of indoor plants that are easy to take care of:
              </p>
              <br />
              <ul className="list-inside list-disc">
                <li>Sansevieria</li>
                <li>Philodendron</li>
                <li>Most succulents</li>
                <li>Pothos</li>
                <li>
                  <a
                    href="https://www.ambius.com/resources/blog/plant-profile/five-of-the-most-popular-indoor-plants"
                    className="hover:underline"
                  >
                    ZZ plant
                  </a>{" "}
                </li>
              </ul>
              <br />
              <h2 className="text-stone-700">
                Which plants are considered indoor plants?
              </h2>
              <p>
                Plants that require a low amount of light and water to thrive
                are typically known as indoor plants. Ambius considers these
                plants as examples of common indoor plants:
              </p>
              <br />

              <ul className="list-inside list-disc">
                <li>Dracaena</li>
                <li>
                  <a
                    href="https://www.ambius.com/plant-design/interior-landscaping"
                    className="hover:underline"
                  >
                    Hedera Helix
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.ambius.com/plant-design/interior-landscaping"
                    className="hover:underline"
                  >
                    Sansevieria Zeylanica Superba
                  </a>
                </li>
                <li>Scindapsus</li>
              </ul>
              <br />
              <p>
                For more information on popular tabletop plants, click here.
              </p>
              <br />
              <Image
                src={image6}
                alt="image6"
                width={900}
                height={700}
                priority
                className="m-2 justify-center items-center rounded-lg"
              />
              <br />
              <h2 className="text-stone-700">
                What are examples of some common indoor plants?
              </h2>
              <br />
              <p>
                More examples of common indoor plants include the following:
              </p>
              <br />
              <ul className="list-inside list-disc">
                <li>Aglaonema</li>
                <li>Dracaena</li>
                <li>Ferns</li>
                <li>Philodendrons</li>
                <li>Palms</li>
                <li>
                  <a
                    href="https://www.ambius.com/resources/blog/plant-profile/peek-into-pothos-plant"
                    className="hover:underline"
                  >
                    {" "}
                    Pothos
                  </a>
                </li>
                <li>Spathiphyllum</li>
                <li>Succulents</li>
              </ul>
              <br />
              <h2 className="text-stone-700">
                What are the best indoor plants?
              </h2>
              <p>
                Good indoor plants will tolerate lower light and humidity. Also,
                they will be less likely to deal with pests. Plus, they usually
                do not grow too much (you wouldn’t want an indoor plant to grow
                at a rapid rate). The best indoor plants include the following:
              </p>
              <ul className="list-inside list-disc">
                <li>
                  <a
                    href="https://www.ambius.com/resources/blog/plant-profile/five-of-the-most-popular-indoor-plants"
                    className="hover:underline"
                  >
                    Aglaonema
                  </a>{" "}
                  – It is attractive, tolerates low light, and does not grow too
                  quickly.
                </li>
                <li>
                  <a
                    href="https://www.ambius.com/resources/blog/plant-profile/five-of-the-most-popular-indoor-plants"
                    className="hover:underline"
                  >
                    Aspidistra
                  </a>{" "}
                  – You should not need to give it a lot of water and it will
                  handle low light. If you’d like to take a vacation and don’t
                  want to be concerned about your plant, aspidistra is a great
                  one for you.
                </li>
                <li>Succulents – Make sure you give them bright light.</li>
                <li>Dracaenas</li>
                <li>Philodendrons</li>
              </ul>
              <h2 className="text-stone-700">
                How do you re-pot indoor plants?
              </h2>
              <p>
                Unless your indoor plant has become too large for the pot it is
                in, you typically don’t need to re-pot indoor plants. For steps
                and tips on how to properly re-pot plants, check out our blog on
                <a
                  href="https://www.ambius.com/resources/blog/plant-care/re-potting-houseplants-101"
                  className="hover:underline"
                >
                  {" "}
                  re-potting plants
                </a>
                .
              </p>
              <br />
              <br />
              <h2 className="text-stone-700">
                How do you care for indoor plants?
              </h2>
              <br />
              <p>
                Here are some tips that will help you care for indoor plants:
              </p>
              <br />
              <ul className="list-inside list-disc">
                <li>
                  Keep the potting soil moist- It’s important to make sure soil
                  is not too wet nor too dry
                </li>
                <li>
                  Make sure the plant pot has drainage holes in the bottom of
                  the pot
                </li>
                <li>
                  Place your plant near a light source, whether it’s natural or
                  artificial
                </li>
                <li>
                  Determine what species of plant you have so you can more
                  accurately care for it
                </li>
              </ul>
              <h2 className="text-stone-700">
                How do you prune indoor plants?
              </h2>
              <br />
              <p>
                If you have no reason to prune plants, don’t do it. But, if you
                notice your plant getting tally and spindly, then we recommend
                you prune them.
              </p>
              <br />
              <h2 className="text-stone-700">
                What are some of the common reasons indoor plants die?
              </h2>
              <p>Some of the most common reasons plants die are:</p>
              <ul className="list-inside list-disc">
                <li>Overwatering or underwatering</li>
                <li>
                  Light Levels (either not enough light or too much light)
                </li>
                <li>Neglect</li>
              </ul>
              <br />
              <Image
                src={image7}
                alt="image7"
                width={900}
                height={700}
                priority
                className="m-2 justify-center items-center rounded-lg"
              />
              <br />
              <h2>How long do indoor plants typically live?</h2>
              <p>
                On average, indoor house plants last 2-5 years. After that,
                plants stop thriving and it’s best to invest in another plant.
              </p>
              <br />
              <h2>Which interior plants improve air quality the most?</h2>
              <p>
                All plants can act as air purifiers but these plants are more
                beneficial than others.
              </p>
              <ul>
                <li>Red-Edged Dracaena</li>
                <li>Weeping Fig</li>
                <li>Bamboo Palm</li>
              </ul>
              <p>
                More information on plants that improve air quality can be found{" "}
                <a
                  href="https://www.ambius.com/air-quality/air-purification"
                  className="hover:underline"
                >
                  here
                </a>
                .
              </p>
              <h2>How do indoor plants affect people’s moods?</h2>
              <p>
                People are often surprised at how beneficial indoor plants are.
                Not only do plants clean the air, but they also reduce noise
                levels and stress in the workplace. For more information on the
                benefits of indoor plants, click{" "}
                <a
                  href="https://www.ambius.com/plant-design/interior-landscaping/office-plants"
                  className="hover:underline"
                >
                  here
                </a>
                .
              </p>
              <br />
              <br />
              <h2>Are indoor plants expensive?</h2>
              <p>
                Indoor plants are known for being very affordable. The smaller
                the plant, the less expensive it will be. We do warn customers
                from buying plants from large retailers. Oftentimes, large
                retailers will sell coconut or palm trees, which are large
                indoor plants sold at a relatively low price.
              </p>
              <p>
                Just because a plant is large and sold for a low price does not
                mean you are getting the best deal. We recommend doing some
                research prior to buying or speaking with a salesperson at a
                gardening center.
              </p>
              <br />
              <Image
                src={image8}
                alt="image8"
                width={900}
                height={700}
                priority
                className="m-2 justify-center items-center rounded-lg"
              />
              <br />
              <h2 className="text-stone-700">
                Which indoor plants work well for small living spaces?
              </h2>
              <p>
                The plants below are great for those living in apartments or
                working in a small workspace. Here is a list of small plants
                great for small spaces.
              </p>
              <ul className="list-inside list-disc">
                <li>Philodendrons</li>
                <li>Succulents, if you have a good light source</li>
                <li>
                  <a
                    href="https://www.ambius.com/plant-design/interior-landscaping"
                    className="hover:underline"
                  >
                    Hedra helix
                  </a>
                </li>
                <li>Devil’s Ivy</li>
              </ul>
              <h2 className="text-stone-700">
                What is the best kind of indoor plant fertilizer to use?
              </h2>
              <p>
                Go to a garden center and look for a fertilizer with “indoor
                plant” on the label. You will use less fertilizer for plants
                inside versus outside, so ensure you use the rate specified for
                indoor plants. If you’re getting fertilizer for blooming plants,
                look for a fertilizer labeled with the type of plant (
                <a
                  href="https://www.ambius.com/resources/blog/plant-profile/the-ultimate-guide-to-orchids-and-orchid-care"
                  className="hover:underline"
                >
                  orchids
                </a>
                , for example) – but if it is unclear which one you should pick,
                it’s fine to use fertilizer for houseplants.
              </p>
              <br />
              <br />
              <h2 className="text-stone-700">
                How do I get rid of bugs on indoor plants?
              </h2>
              <p>
                Bugs on your indoor plants can be really annoying! If you spot
                pests, go to a garden center and purchase an insecticidal soap,
                which usually is contained in a spray bottle. When you notice
                bugs, spray the entire plant – the undersides and tops of the
                leaves as well as the stem. Next, wait about two weeks and
                repeat the spraying. Then, wait two more weeks and spray again.
              </p>
              <br />
              <p>
                You will want to spray three times because the soap usually will
                not eliminate eggs, which could hatch. If your plant is dealing
                with a severe infestation and you are unable to eradicate the
                pests, throw out the plant. You can also use a damp paper towel
                to remove a pest.
              </p>
              <h2 className="text-stone-700">
                How do I know when to water my indoor plant?
              </h2>
              <p>
                Over-watering is a common mistake, and you will want to make
                sure the plant actually requires
                <a
                  href="https://www.ambius.com/resources/plant-care/how-often-do-my-plants-need-water"
                  className="hover:underline"
                >
                  water
                </a>
                now or if it should wait until later. Here are some ways to see
                if it’s time to water:
              </p>
              <ul>
                <li>
                  <b className="text-stone-700">Soil probe</b> – This probe will
                  draw out soil, which will help you understand how dry the soil
                  is below the surface.
                </li>
                <li>
                  <b className="text-stone-700">Moisture meter </b>– This tool
                  tells you, on a scale, how dry soil is.
                </li>
                <li>
                  <b className="text-stone-700">Lifting the plant up</b> –
                  Heaviness signifies the plant has enough water, but lightness
                  signifies the plant is dry.
                </li>
                <li>
                  <b className="text-stone-700">Wilting</b>– Wilting typically
                  happens because the plant is not getting sufficient water.
                  Lift the plant to see if it is light in weight or if it’s
                  heavy.
                </li>
                <li>
                  <b className="text-stone-700">Tipping</b> – If the leaf edges
                  begin browning and are crispy to the touch, the plant likely
                  needs water. If the leaf edges are becoming brown but feel
                  mushy, the plant has likely gotten too much water.
                </li>
                <li>
                  <a
                    href="https://www.ambius.com/resources/plant-care/why-plants-turn-yellow"
                    className="hover:underline"
                  >
                    Yellow leaves
                  </a>
                  – Yellow leaves may also signify that a plant has too much or
                  too little water, but this is not always the case.{" "}
                </li>
              </ul>
              <h2 className="text-stone-700">
                How do I care for peace lily plants indoors?
              </h2>
              <p>
                Peace lily plants (spathiphyllum) could make a nice addition to
                your indoor space, such as an{" "}
                <a
                  href="https://www.ambius.com/locations"
                  className="hover:underline"
                >
                  office
                </a>
                . These plants need to be watered moderately often, but make
                sure you do not over-water them. If your peace lily begins
                wilting, just give it some water. You’ll know it has enough if
                water begins seeping out of the pot’s drainage holes. Peace
                lilies also will handle low light. A north-facing window is a
                nice location for this plant, but you do not necessarily need to
                put it in a window.
              </p>
              <h2 className="text-[#669933] text-3xl px-5">
                Indoor plant design specialists
              </h2>
              <p>
                Do you want to add indoor plants to your workspace decor but
                aren’t sure where to start?
              </p>
              <p>
                Contact your local Ambius consultant by filling{" "}
                <a
                  href="https://www.ambius.com/contact-us"
                  className="hover:underline"
                >
                  out our online form
                </a>
                .
              </p>
            </div>
            <div className="border-2 border-purple-700 bg-white "></div>
          </div>
        </div>
      </div>
    </div>
  );
}
