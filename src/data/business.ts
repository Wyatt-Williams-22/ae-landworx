export const business = {
  name: "A&E Landworx",
  tagline: "Female Owned & Family Operated",
  phone: "(910) 334-1460",
  phoneHref: "tel:+19103341460",
  email: "aelandworx@outlook.com",
  address: {
    line1: "PO Box 1265",
    line2: "Monroe, NC 28111",
    full: "PO Box 1265, Monroe, NC, United States, 28111",
  },
  hours: "Always Open",
  facebook: "https://www.facebook.com/AELandworx",
  tiktok:
    "https://www.tiktok.com/@ae_landworx?is_from_webapp=1&sender_device=pc",
} as const;

export const services = [
  {
    title: "Septic Inspections",
    description:
      "Thorough septic system inspections throughout North Carolina to keep your property compliant and worry-free.",
    icon: "ClipboardCheck",
  },
  {
    title: "POS Inspections",
    description:
      "Point-of-sale septic inspections for real estate transactions — clear, reliable reports when buying or selling a property.",
    icon: "FileSearch",
  },
  {
    title: "Septic Installation",
    description:
      "Full septic system installs for residential and commercial properties — from conventional systems to drip irrigation and everything in between.",
    icon: "Hammer",
  },
  {
    title: "Septic Repair",
    description:
      "Expert septic system repairs across North Carolina and South Carolina, done right the first time.",
    icon: "Wrench",
  },
  {
    title: "Grading",
    description:
      "Precision site grading for new builds, drainage correction, and property improvements.",
    icon: "Mountain",
  },
  {
    title: "Land Clearing & Excavating",
    description:
      "From wooded lots to rough terrain, we clear and excavate land to get your project build-ready.",
    icon: "Trees",
  },
  {
    title: "Perc Hole Digging",
    description:
      "Percolation hole digging to test soil and support your septic permitting process.",
    icon: "CircleDot",
  },
  {
    title: "Driveway Installation & Refresh",
    description:
      "New driveway installation or a refresh for existing gravel driveways that need some TLC.",
    icon: "Route",
  },
] as const;

export const serviceAreas = [
  "Marshville, NC",
  "Mint Hill, NC",
  "Wingate, NC",
  "Rockingham, NC",
  "Charlotte, NC",
  "Waxhaw, NC",
  "Indian Trail, NC",
  "Monroe, NC",
  "Lake Norman of Catawba, NC",
  "Wadesboro, NC",
] as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Service Area", href: "#areas" },
  { label: "Contact", href: "#contact" },
] as const;
