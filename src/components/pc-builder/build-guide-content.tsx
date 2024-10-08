import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function BuildGuideContent() {
  const buildSteps = [
    {
      title: "Prepare Your Workspace",
      content:
        "Clear a large, well-lit space. Gather all your components and tools. You'll need a Phillips head screwdriver, thermal paste, and an anti-static wrist strap (optional but recommended).",
    },
    {
      title: "Install the CPU",
      content:
        "Carefully place the CPU into the motherboard socket, matching the alignment indicators. Gently lower the retention arm to secure it in place.",
    },
    {
      title: "Install RAM",
      content:
        "Insert the RAM modules into the appropriate slots on the motherboard. They should click into place when properly seated.",
    },
    {
      title: "Mount the Motherboard",
      content:
        "Place the I/O shield into the case, then carefully mount the motherboard using the provided standoffs and screws.",
    },
    {
      title: "Install the Power Supply",
      content:
        "Mount the power supply in the designated area of the case and connect the main power cables to the motherboard.",
    },
    {
      title: "Install Storage Drives",
      content:
        "Mount your SSD and/or HDD in the appropriate drive bays and connect the SATA and power cables.",
    },
    {
      title: "Install the GPU",
      content:
        "Insert the graphics card into the PCIe slot on the motherboard and secure it to the case. Connect any necessary power cables.",
    },
    {
      title: "Connect Case Cables",
      content:
        "Connect the front panel cables (power, reset, LED indicators) to the appropriate headers on the motherboard.",
    },
    {
      title: "Install CPU Cooler",
      content:
        "Apply thermal paste to the CPU if necessary, then mount the CPU cooler following the manufacturer's instructions.",
    },
    {
      title: "Final Check and Power On",
      content:
        "Double-check all connections, ensure proper cable management, then close the case. Connect peripherals and power on your new PC!",
    },
  ];

  return (
    <Accordion type="single" collapsible className="w-full">
      {buildSteps.map((step, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger>{step.title}</AccordionTrigger>
          <AccordionContent>{step.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
