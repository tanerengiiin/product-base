import ProductCard from "@/components/ProductCard";
import { Heart } from "@phosphor-icons/react/dist/ssr/Heart";

export default function Home() {
  return (
    <div className="py-20">
      <div className="flex items-center text-primary justify-between w-[660px] mx-auto mb-6">
        <h2 className="text-2xl font-semibold">Recommendations</h2>
      </div>
      <div className="flex items-start gap-6 w-fit mx-auto">
        <div className="flex flex-col gap-6">
          <ProductCard
          title="Noor - Chat for teams"
          description="The next-gen chat app for teamwork. No bloat. Fast, written in Rust."
          owner="Noor Studio"
          src="/images/noor.png"
          link="https://noor.to"
          upvotesNum='882'
          reviewsNum='1.2k'
          />
          <ProductCard
          title="Minimal Theme for Twitter"
          description="Chrome, Safari, and Firefox extension to make Twitter more minimal."
          owner="Noor Studio"
          src="/images/typefully.png"
          link="https://typefully.com"
          upvotesNum='558'
          reviewsNum='567'
          />
        </div>
        <div className="flex flex-col gap-6">
          <ProductCard
          title="Harmony - A different kind of color picker"
          description="The next-gen chat app for teamwork. No bloat. Fast, written in Rust."
          owner="Harmony Studio"
          src="/images/harmony.png"
          link="https://harmony.sh"
          upvotesNum='765'
          reviewsNum='250'
          category="Productivity"
          />
          <ProductCard
          title="A list of macOS defaults commands with demos ✨"
          description="You've already copied `defaults write` commands. Sometimes you don't know what they do and are not sure they still work. This list of macOS defaults commands is here to help."
          owner="MacOS Studio"
          src="/images/macos.png"
          link="https://macos-defaults.com"
          upvotesNum='882'
          reviewsNum='1.2k'
          />
        </div>
      </div>
    </div>
  );
}
