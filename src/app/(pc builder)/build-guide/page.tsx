import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Cpu,
  HardDrive,
  Fan,
  Power,
  Monitor,
  Wrench,
  Home,
  LockIcon,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "PC Build Guide",
  description: "Learn how to build your own PC step by step",
};

const buildSteps = [
  {
    icon: Cpu,
    title: "Choose CPU",
    description: "Select the brain of your PC",
  },
  { icon: Home, title: "Pick GPU", description: "Decide on graphics power" },
  {
    icon: LockIcon,
    title: "Add RAM",
    description: "Determine memory capacity",
  },
  { icon: HardDrive, title: "Storage", description: "Choose SSDs and HDDs" },
  { icon: Fan, title: "Cooling", description: "Keep your PC chilled" },
  { icon: Power, title: "Power Supply", description: "Ensure stable power" },
  {
    icon: Monitor,
    title: "Select Monitor",
    description: "Choose your display",
  },
  { icon: Wrench, title: "Final Assembly", description: "Put it all together" },
];

export default function BuildGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">
            Build Your Dream PC
          </h1>
          <p className="text-xl text-muted-foreground">
            A step-by-step guide to crafting your perfect machine
          </p>
        </div>

        <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>PC Building Journey</CardTitle>
            <CardDescription>
              Follow these steps to create your custom PC
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {buildSteps.map((step, index) => (
                <Card key={index} className="bg-white dark:bg-gray-800">
                  <CardHeader className="text-center">
                    <step.icon className="w-12 h-12 mx-auto " />
                    <CardTitle className="mt-2">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-center text-muted-foreground">
                      {step.description}
                    </p>
                  </CardContent>
                  <CardFooter className="justify-center">
                    <Badge variant="outline">Step {index + 1}</Badge>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="tips">Pro Tips</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>Building Process Overview</CardTitle>
                <CardDescription>
                  What to expect when building your PC
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Building a PC is an exciting journey that allows you to create
                  a machine tailored to your needs. The process involves
                  selecting compatible components, assembling them carefully,
                  and bringing your creation to life. With patience and
                  attention to detail, you'll have a custom PC that outperforms
                  pre-built options at a similar price point.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="tips">
            <Card>
              <CardHeader>
                <CardTitle>Pro Tips for PC Builders</CardTitle>
                <CardDescription>
                  Advice to ensure a smooth building experience
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Always check component compatibility before purchasing
                  </li>
                  <li>
                    Work in a static-free environment to protect your components
                  </li>
                  <li>
                    Read your motherboard manual thoroughly before assembly
                  </li>
                  <li>
                    Don't forget to install standoffs before mounting the
                    motherboard
                  </li>
                  <li>
                    Cable management is key for both aesthetics and airflow
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="resources">
            <Card>
              <CardHeader>
                <CardTitle>Helpful Resources</CardTitle>
                <CardDescription>
                  Additional information to aid your build
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    PCPartPicker: For component selection and compatibility
                    checking
                  </li>
                  <li>
                    r/buildapc: Community for PC building advice and
                    troubleshooting
                  </li>
                  <li>
                    YouTube channels: Linus Tech Tips, Gamers Nexus, and Bitwit
                    for tutorials
                  </li>
                  <li>
                    Tom's Hardware: For in-depth component reviews and
                    comparisons
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="text-center">
          <Button size="lg" className="" asChild>
            <Link href="/list">Start Your Build</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
