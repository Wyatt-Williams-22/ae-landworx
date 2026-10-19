export type ProjectPhoto = {
  src: string;
  alt: string;
};

export type ProjectCategory = {
  id: string;
  label: string;
  title: string;
  description: string;
  photos: ProjectPhoto[];
  emptyNote?: string;
};

export const projectCategories: ProjectCategory[] = [
  {
    id: "septic-installs",
    label: "Septic Installs",
    title: "Septic Installs",
    description:
      "Conventional, low-profile, and panel block septic system installations from dig to final cover.",
    photos: [
      { src: "/projects/septic-installs/separated-materials.jpg", alt: "Separated Materials" },
      { src: "/projects/septic-installs/setting-grade.jpg", alt: "Setting Grade" },
      { src: "/projects/septic-installs/machines-prior-to-digging.jpg", alt: "Machines Prior to Digging" },
      { src: "/projects/septic-installs/serial-chambers.jpg", alt: "Serial Chambers" },
      { src: "/projects/septic-installs/chambers-prior-to-cover.jpg", alt: "Chambers Prior to Cover" },
      {
        src: "/projects/septic-installs/low-profile-drain-field-final-cover.jpg",
        alt: "Low Profile Drain Field Final Cover",
      },
      {
        src: "/projects/septic-installs/portrait-of-chambers-prior-to-cover.jpg",
        alt: "Portrait of Chambers Prior to Cover",
      },
      { src: "/projects/septic-installs/applying-final-cover.jpg", alt: "Applying Final Cover" },
      {
        src: "/projects/septic-installs/serial-chambers-with-length.jpg",
        alt: "Serial Chambers with Length",
      },
      { src: "/projects/septic-installs/chambers.jpg", alt: "Chambers" },
      { src: "/projects/septic-installs/finished-grading.jpg", alt: "Finished Grading" },
      { src: "/projects/septic-installs/rocks-from-tank-holes.jpg", alt: "Rocks from Tank Holes" },
      { src: "/projects/septic-installs/chambers-2.jpg", alt: "Additional Chambers" },
      { src: "/projects/septic-installs/serial-chambers-2.jpg", alt: "Serial Chambers" },
      {
        src: "/projects/septic-installs/open-tank-hole-with-caution-tape.jpg",
        alt: "Open Tank Hole with Caution Tape",
      },
      { src: "/projects/septic-installs/low-profile-drain-field.jpg", alt: "Low Profile Drain Field" },
      {
        src: "/projects/septic-installs/supply-line-with-mini-excavator.jpg",
        alt: "Supply Line with Mini Excavator",
      },
      { src: "/projects/septic-installs/sloped-trench.jpg", alt: "Sloped Trench with Gravel and Pipe" },
      { src: "/projects/septic-installs/chambers-installed.jpg", alt: "Chambers Installed" },
      { src: "/projects/panel-block/tank-being-packed.jpg", alt: "Plastic Tank Installation" },
      { src: "/projects/panel-block/adam-in-trench-with-panels.jpg", alt: "Panel Block Trench (In Progress)" },
      { src: "/projects/panel-block/float-tree-in-riser.jpg", alt: "Risers Installed on a New Septic Tank" },
      { src: "/projects/panel-block/rainy-supplies.jpg", alt: "Panel Block Materials" },
      {
        src: "/projects/panel-block/kid-catcher-for-safety.jpg",
        alt: "Safety is Always a Priority! Risers with Safety Lids and Safety Screws are Installed After the Tank is Set",
      },
      { src: "/projects/panel-block/panels-in-trench.jpg", alt: "Panel Block Trench (In Progress)" },
      { src: "/projects/panel-block/open-trench-pre-panel.jpg", alt: "Panel Block Trench (In Progress)" },
      { src: "/projects/panel-block/broom-finish.jpg", alt: "Panel Block Prior to Final Cover" },
      { src: "/projects/panel-block/one-by-six-in-trench.jpg", alt: "Panel Block Trench (In Progress)" },
      {
        src: "/projects/panel-block/placing-lime-in-empty-trench.jpg",
        alt: "Panel Block Trench (In Progress)",
      },
      { src: "/projects/panel-block/panel-in-air.jpg", alt: "Moving Panel Block Materials into Place" },
      { src: "/projects/panel-block/open-trench.jpg", alt: "Panel Block Trench (In Progress)" },
      {
        src: "/projects/panel-block/finished-end-of-trench-with-foam-and-lids.jpg",
        alt: "Panel Block Trench (In Progress)",
      },
      { src: "/projects/panel-block/finished-trench.jpg", alt: "Panel Block Prior to Final Cover" },
      {
        src: "/projects/panel-block/open-trench-without-lids.jpg",
        alt: "Panel Block Trench (In Progress)",
      },
    ],
  },
  {
    id: "repairs",
    label: "Repairs",
    title: "Septic Repairs",
    description: "Tank, supply line, riser, and alarm panel repairs.",
    photos: [
      { src: "/projects/septic-repairs/photo.jpg", alt: "Septic Repairs" },
      { src: "/projects/septic-repairs/risers-with-safety-lids.jpg", alt: "Risers with Safety Lids" },
      { src: "/projects/septic-repairs/old-alarm-panel.jpg", alt: "Old Alarm Panel" },
      { src: "/projects/septic-repairs/photo-2.jpg", alt: "Septic Repairs" },
      { src: "/projects/septic-repairs/new-alarm-panel.jpg", alt: "New Alarm Panel" },
      { src: "/projects/septic-repairs/photo-3.jpg", alt: "Septic Repairs" },
      { src: "/projects/septic-repairs/new-tank.jpg", alt: "New Tank" },
      { src: "/projects/septic-repairs/water-at-fitting.jpg", alt: "Water at Fitting" },
      { src: "/projects/septic-repairs/cracked-old-riser.jpg", alt: "Cracked Old Riser" },
      { src: "/projects/septic-repairs/old-supply-line.jpg", alt: "Old Supply Line" },
      { src: "/projects/septic-repairs/photo-4.jpg", alt: "Septic Repairs" },
      { src: "/projects/septic-repairs/supply-line-from-tank.jpg", alt: "Supply Line From Tank" },
      { src: "/projects/septic-repairs/photo-5.jpg", alt: "Septic Repairs" },
      { src: "/projects/septic-repairs/old-tank.jpg", alt: "Old Tank" },
      { src: "/projects/septic-repairs/new-tank-hole.jpg", alt: "New Tank Hole" },
      { src: "/projects/septic-repairs/repaired-supply-line.jpg", alt: "Repaired Supply Line" },
      { src: "/projects/septic-repairs/photo-6.jpg", alt: "Septic Repairs" },
      {
        src: "/projects/septic-repairs/top-half-of-tank-over-roof.jpg",
        alt: "Top Half of Tank Over the Roof",
      },
      { src: "/projects/septic-repairs/photo-7.jpg", alt: "Septic Repairs" },
      { src: "/projects/septic-repairs/leaking-old-riser.jpg", alt: "Leaking Old Riser" },
      { src: "/projects/septic-repairs/risers-in-place.jpg", alt: "Risers in Place" },
      { src: "/projects/septic-repairs/roots-in-old-supply-line.jpg", alt: "Roots in Old Supply Line" },
      { src: "/projects/septic-repairs/final-distribution-box.jpg", alt: "Final Distribution Box" },
      { src: "/projects/septic-repairs/covering-old-tank.jpg", alt: "Covering the Old Tank" },
      { src: "/projects/septic-repairs/two-distribution-boxes.jpg", alt: "Two Distribution Boxes" },
      {
        src: "/projects/septic-repairs/crushed-tank-new-hole-with-rock.jpg",
        alt: "Crushed Tank and New Hole with Rock",
      },
      { src: "/projects/septic-repairs/broken-crushed-supply-line.jpg", alt: "Broken & Crushed Supply Line" },
      { src: "/projects/septic-repairs/open-tank.jpg", alt: "Open Tank" },
      { src: "/projects/septic-repairs/photo-8.jpg", alt: "Septic Repairs" },
      {
        src: "/projects/septic-repairs/old-supply-line-from-tank-to-distribution-box.jpg",
        alt: "Old Supply Line from Tank to Distribution Box",
      },
    ],
  },
  {
    id: "inspections",
    label: "Inspections",
    title: "Septic Inspections",
    description: "Septic inspections, including point-of-sale inspections for buying and selling property.",
    photos: [
      { src: "/projects/pos-inspections/septic-locate.jpg", alt: "Septic System Location During Inspection" },
      {
        src: "/projects/pos-inspections/septic-locate-distribution-box.jpg",
        alt: "Septic System Components Located During Inspection",
      },
      {
        src: "/projects/pos-inspections/septic-inspection-with-camera.jpg",
        alt: "Septic System Components Visualized During Point of Sale Inspection",
      },
      {
        src: "/projects/pos-inspections/septic-inspection.jpg",
        alt: "Septic System Components Visualized During Point of Sale Inspection",
      },
    ],
  },
  {
    id: "grading-excavating",
    label: "Grading & Excavating",
    title: "Grading & Excavating",
    description: "Site grading, land clearing, and excavating for builds, drainage, and property improvements.",
    photos: [],
    emptyNote:
      "Grading and excavating photos are not in the gallery yet.",
  },
  {
    id: "culverts-driveways",
    label: "Culverts & Driveways",
    title: "Culverts & Driveways",
    description: "Culvert replacement, pipe installs, and driveway work.",
    photos: [
      { src: "/projects/culvert/culvert-after.jpg", alt: "Culvert Replacement (After)" },
      { src: "/projects/culvert/photo.jpg", alt: "Culvert Replacement (In Progress)" },
      { src: "/projects/culvert/photo-2.jpg", alt: "Culvert Replacement (After)" },
      { src: "/projects/culvert/photo-3.jpg", alt: "Culvert Replacement (After)" },
      { src: "/projects/culvert/removing-existing-pipe.jpg", alt: "Culvert Replacement (In Progress)" },
      { src: "/projects/culvert/installing-new-pipe.jpg", alt: "Culvert Replacement (In Progress)" },
      { src: "/projects/culvert/culvert-before.jpg", alt: "Culvert Replacement (Before)" },
      { src: "/projects/culvert/photo-4.jpg", alt: "Culvert Replacement (In Progress)" },
      { src: "/projects/culvert/seed-and-straw.jpg", alt: "Culvert Replacement (After)" },
    ],
  },
];
