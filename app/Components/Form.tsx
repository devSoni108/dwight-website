"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const Form = () => {
  const [industry, setIndustry] = useState("");

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      className="space-y-4"
    >
      {/* Honeypot field for Netlify Forms */}
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="bot-field" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Name*</Label>
          <Input
            id="name"
            name="name"
            placeholder="Your full name"
            aria-label="Name"
            required
          />
        </div>
        <div>
          <Label htmlFor="company">Company Name*</Label>
          <Input
            id="company"
            name="company"
            placeholder="Your company"
            aria-label="Company Name"
            required
          />
        </div>
      </div>
      <div>
        <Label htmlFor="businessUrl">Business URL</Label>
        <Input
          id="businessUrl"
          name="businessUrl"
          placeholder="https://www.example.com"
          aria-label="Business URL"
        />
      </div>
      <div>
        <Label htmlFor="role">Role / Job Title*</Label>
        <Input
          id="role"
          name="role"
          placeholder="Your role"
          aria-label="Role or Job Title"
          required
        />
      </div>
      <div>
        <Label htmlFor="email">Email Address*</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          aria-label="Email Address"
          required
        />
      </div>
      <div>
        <Label htmlFor="phone">Phone Number (optional)</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Your phone number"
          aria-label="Phone Number"
        />
      </div>
      <div>
        <Label htmlFor="industry">Industry / Sector</Label>
        <Select onValueChange={(value) => setIndustry(value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select your industry" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            {[
              { value: "advertising", label: "Advertising" },
              { value: "finance", label: "Finance" },
              { value: "technology", label: "Technology & Software" },
              { value: "medical", label: "Healthcare & Medical Services" },
              { value: "education", label: "Education & E-Learning" },
              { value: "services", label: "Consulting & Professional Services" },
              { value: "manufacturing", label: "Manufacturing & Supply Chain" },
              { value: "legal", label: "Legal & Compliance" },
              { value: "media", label: "Media & Entertainment" },
              { value: "hospitality", label: "Hospitality & Travel" },
              { value: "transportation", label: "Logistics & Transportation" },
              { value: "government", label: "Government & Public Sector" },
              { value: "retail", label: "Retail" },
              { value: "corporate", label: "Corporate" },
              { value: "other", label: "Other" },
            ].map(({ value, label }) => (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <input type="hidden" name="industry" value={industry} />
      </div>
      <div>
        <Label>Interested Agent(s)</Label>
        <div className="mt-2 space-y-6">
          <div>
            <h4 className="font-semibold mb-2">Built for Agencies</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                "Main Operations Agent",
                "Creative Ops Specialist Agent",
                "Client Service Agent",
                "Traffic & Production Controller Agent",
                "Strategy Alignment Agent",
                "Brand Guardian Agent",
              ].map((agent) => (
                <div
                  key={agent}
                  className="flex items-center space-x-2"
                >
                  <Checkbox
                    id={agent.replace(/\s+/g, "-").toLowerCase()}
                    name="agents[]"
                    value={agent}
                  />
                  <label
                    htmlFor={agent.replace(/\s+/g, "-").toLowerCase()}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {agent}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">AI Agents for Any Business</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                "Executive Assistant Agent",
                "HR & Talent Management Agent",
                "Finance & Budget Analyst Agent",
                "Sales & CRM Agent",
                "Operations & Workflow Optimiser Agent",
                "Data Analyst & Reporting Agent",
                "Training & Development Facilitator Agent",
              ].map((agent) => (
                <div
                  key={agent}
                  className="flex items-center space-x-2"
                >
                  <Checkbox
                    id={agent.replace(/\s+/g, "-").toLowerCase()}
                    name="agents[]"
                    value={agent}
                  />
                  <label
                    htmlFor={agent.replace(/\s+/g, "-").toLowerCase()}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {agent}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="other-agent" name="agents[]" value="Other" />
            <label
              htmlFor="other-agent"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Other
            </label>
          </div>
        </div>
      </div>
      <div>
        <Label htmlFor="notes">Additional Notes (optional)</Label>
        <Textarea
          id="notes"
          name="notes"
          placeholder="Any specific questions or preferences?"
          aria-label="Additional Notes"
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-[#005F73] hover:bg-[#005F73]/90 text-white font-bold"
      >
        Submit
      </Button>
    </form>
  );
};

export default Form;
