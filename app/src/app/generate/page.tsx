"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Toast } from "@/components/ui/toast";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const Generate = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(0);
  const [amount, setAmount] = useState<number>(0);
  const [campaign, setCampaign] = useState<string>("");
  const [codes, setCodes] = useState<string[]>([]);

  const generateCodes = (quantity: number) => {
    const newCodes = [];
    for (let i = 0; i < quantity; i++) {
      newCodes.push(Math.random().toString(36).substr(2, 10));
    }
    return newCodes;
  };

  const handleClick = () => {
    setIsLoading(true);
    const newCodes = generateCodes(quantity);
    setCodes(newCodes);
    setOpen(true);
    setIsLoading(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const downloadCSV = () => {
    const csvHeader = "Index,Code\n";
    const csvContent = codes
      .map((code, index) => `${index + 1},${code}`)
      .join("\n");
    const csvData = csvHeader + csvContent;
    const csvBlob = new Blob([csvData], { type: "text/csv" });
    const csvUrl = URL.createObjectURL(csvBlob);
    const link = document.createElement("a");
    link.setAttribute("href", csvUrl);
    link.setAttribute("download", "codes.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <section className="max-w-3xl px-4 md:px-0 mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-primary-foreground mb-4">
          Generate one (or multiple) ✨code✨
        </h1>
        <p className="text-muted-foreground text-lg">
          Create multiple prepaid crypto cards easily and securely. Perfect for
          gifting or/and targeted campaigns.
        </p>
      </section>
      <Card className="w-full max-w-md p-6 bg-card text-card-foreground shadow-lg rounded-lg">
        <div className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Generate</h2>
            <div className="grid gap-2">
              <label htmlFor="">Name of campaign or reason of gift</label>
              <Input
                type="text"
                placeholder={"Christmas for example"}
                value={campaign}
                className="flex-1"
                onChange={(e) => setCampaign(e.target.value)}
              />
              <label htmlFor="">How many card(s)?</label>
              <Input
                type="number"
                placeholder="2 for example"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="flex-1"
              />
              <label htmlFor="">Amount of each card(s)</label>
              <Input
                type="number"
                placeholder="2 for example"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="flex-1"
              />
            </div>
          </div>
          <AlertDialog open={open}>
            <AlertDialogTrigger asChild>
              <Button
                onClick={handleClick}
                variant="outline"
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors w-full"
              >
                Generate 💸
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="sm:max-w-[600px]">
              <AlertDialogHeader>
                <AlertDialogTitle>Here's your gift 🥳</AlertDialogTitle>
                <AlertDialogDescription>
                  You can copy paste or directly download the CSV file
                  containing your codes.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <div className="space-y-4 py-4">
                <Card>
                  <CardHeader>
                    <CardTitle>My Code(s) :</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="whitespace-pre-wrap break-all">
                      {codes.join("\n")}
                    </pre>
                  </CardContent>
                </Card>
                <div className="flex justify-end">
                  <Button variant="outline" onClick={handleClose}>
                    Cancel
                  </Button>
                  <Button variant="outline" onClick={downloadCSV}>
                    Export to CSV
                  </Button>
                </div>
              </div>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </Card>
    </div>
  );
};

export default Generate;
