import { Carousel } from "@ark-ui/react/carousel";
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function ThumbnailsCarousel() {
  const images = [
    {
      full: 'https://i.imgur.com/TEj1QjI.jpeg',
      thumb: 'https://i.imgur.com/TEj1QjI.jpeg',
    },
    {
      full: 'https://i.imgur.com/FIq0II4.jpeg',
      thumb: 'https://i.imgur.com/FIq0II4.jpeg',
    },
    {
      full: 'https://i.imgur.com/kpeYt2k.jpeg',
      thumb: 'https://i.imgur.com/kpeYt2k.jpeg',
    },
    {
      full: 'https://i.imgur.com/orMuzKo.jpeg',
      thumb: 'https://i.imgur.com/orMuzKo.jpeg',
    },
    {
      full: 'https://i.imgur.com/c0TjG3y.jpeg',
      thumb: 'https://i.imgur.com/c0TjG3y.jpeg',
    },
    {
      full: 'https://i.imgur.com/8oG7svi.jpeg',
      thumb: 'https://i.imgur.com/8oG7svi.jpeg',
    }
  ];

  return (
    // FIX: The `startIndex` property does not exist on this version of <Carousel.Root>.
    // The component defaults to index 0, so the prop is not needed.
    <Carousel.Root className="max-w-4xl p-2 mx-auto">
      <Carousel.ItemGroup className="overflow-hidden rounded-lg shadow-lg mb-4">
        {images.map((image, index) => (
          <Carousel.Item key={index} index={index}>
            <img
              src={image.full}
              alt={`Slide ${index + 1}`}
              className="w-full h-[480px] object-cover"
            />
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>

      <div className="flex items-center gap-4">
        <Carousel.PrevTrigger className="p-2 bg-secondary hover:bg-accent text-secondary-foreground rounded-lg transition-colors shrink-0 disabled:opacity-50 disabled:cursor-not-allowed">
          <ChevronLeft className="w-6 h-6" />
        </Carousel.PrevTrigger>

        <div className="flex gap-2 overflow-x-auto scrollbar-hide flex-1 px-2">
          {images.map((image, index) => (
            <Carousel.Indicator
              key={index}
              index={index}
              className="shrink-0 border-2 border-transparent data-[current]:border-primary rounded-md overflow-hidden cursor-pointer transition-all hover:opacity-80"
            >
              <img
                src={image.thumb}
                alt={`Thumbnail ${index + 1}`}
                className="w-24 h-16 object-cover"
              />
            </Carousel.Indicator>
          ))}
        </div>

        <Carousel.NextTrigger className="p-2 bg-secondary hover:bg-accent text-secondary-foreground rounded-lg transition-colors shrink-0 disabled:opacity-50 disabled:cursor-not-allowed">
          <ChevronRight className="w-6 h-6" />
        </Carousel.NextTrigger>
      </div>
    </Carousel.Root>
  );
}
