import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const messages = [
  "Study Together, Succeed Together",
  "You're Making Great Progress",
  "Keep Going, You've Got This",
  "Small Steps Lead to Big Results",
];

const MotivationCard = ({ index = 0 }: { index?: number }) => {
  const msg = messages[index % messages.length];
  return (
    <Card className="border-0 bg-gradient-primary text-primary-foreground overflow-hidden">
      <CardContent className="p-5 flex items-center gap-3">
        <div className="grid place-items-center h-10 w-10 rounded-xl bg-primary-foreground/15">
          <Sparkles className="h-5 w-5" aria-hidden />
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide opacity-90">Daily boost</p>
          <p className="font-semibold text-base leading-tight">{msg}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export { messages as motivationMessages };
export default MotivationCard;
