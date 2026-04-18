export interface Product {
  id: string;
  name: string;
  price: number;
  compareAtPrice?: number;
  description: string;
  features: string[];
  images: string[];
  category: string;
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  {
    id: "infinity-metal-fidget",
    name: "Infinity Metal Fidget Toy",
    price: 24.99,
    compareAtPrice: 35.00,
    description: "Built for endless flipping, folding, and focus. Crafted from premium anodized aluminum, this satisfyingly weighty metal fidget toy fits perfectly in one hand. It's the ultimate tool to keep your fingers busy, banish boredom, and help your mind lock into deep work.",
    features: [
      "Premium anodized aluminum alloy",
      "Smooth, silent hinges for discreet use",
      "Satisfying weight and tactile feedback",
      "Pocket-sized for on-the-go focus",
      "Helps reduce anxiety and nail-biting"
    ],
    images: [
      "https://images.unsplash.com/photo-1611077544831-282110292723?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1587304849206-25f0134cce16?auto=format&fit=crop&q=80&w=1000"
    ],
    category: "Fidgets",
    rating: 4.9,
    reviews: 1245
  },
  {
    id: "cloudsqueeze-duo",
    name: "CloudSqueeze Duo (Set of 2)",
    price: 14.99,
    compareAtPrice: 22.00,
    description: "Squeeze the stress away. The CloudSqueeze Duo includes two ultra-soft, slow-rising anti-stress balls designed to absorb your daily frustrations. Keep one at your desk and one in your bag for instant, squishy relief whenever you need it.",
    features: [
      "Set of two (1x Mint, 1x Peach)",
      "Ultra-durable, tear-resistant silicone",
      "Slow-rising memory foam core",
      "Non-toxic and hypoallergenic",
      "Perfect for hand physical therapy"
    ],
    images: [
      "https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1515595967223-f9fa59af5a3b?auto=format&fit=crop&q=80&w=1000"
    ],
    category: "Stress Balls",
    rating: 4.8,
    reviews: 892
  },
  {
    id: "zenspin-pro",
    name: "ZenSpin Pro Fidget Spinner",
    price: 19.99,
    compareAtPrice: 29.00,
    description: "Experience the mesmerizing glide of the ZenSpin Pro. Engineered with an aerospace-grade ceramic bearing, this spinning fidget delivers up to 5 minutes of silent, frictionless rotation. It's a visual and tactile anchor for a wandering mind.",
    features: [
      "Aerospace-grade R188 ceramic bearing",
      "Up to 5 minutes of continuous spin time",
      "Perfectly balanced zinc alloy body",
      "Whisper-quiet operation",
      "Ergonomic finger caps for comfort"
    ],
    images: [
      "https://images.unsplash.com/photo-1500051404151-628c70208d28?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1495364141860-b0d03dea4557?auto=format&fit=crop&q=80&w=1000"
    ],
    category: "Spinners",
    rating: 4.9,
    reviews: 2104
  }
];
