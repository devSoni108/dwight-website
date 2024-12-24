'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

const Form = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log('Form submitted')
    }

    return (
        <form 
            name="contact" 
            method="POST" 
            data-netlify="true" 
            netlify-honeypot="bot-field" 
            onSubmit={handleSubmit} 
            className="space-y-4"
        >
            <input type="hidden" name="form-name" value="contact" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" placeholder="Your full name" required />
                </div>
                <div>
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" name="company" placeholder="Your company" required />
                </div>
            </div>
            <div>
                <Label htmlFor="businessUrl">Business URL</Label>
                <Input id="businessUrl" name="businessUrl" type="url" placeholder="https://www.example.com" />
            </div>
            <div>
                <Label htmlFor="role">Role / Job Title</Label>
                <Input id="role" name="role" placeholder="Your role" required />
            </div>
            <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" name="email" type="email" placeholder="you@example.com" required />
            </div>
            <div>
                <Label htmlFor="phone">Phone Number (optional)</Label>
                <Input id="phone" name="phone" type="tel" placeholder="Your phone number" />
            </div>
            <div>
                <Label htmlFor="industry">Industry / Sector</Label>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                        <SelectItem value="advertising">Advertising</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="technology">Technology & Software</SelectItem>
                        <SelectItem value="medical">Healthcare & Medical Services</SelectItem>
                        <SelectItem value="education">Education & E-Learning</SelectItem>
                        <SelectItem value="services">Consulting & Professional Services</SelectItem>
                        <SelectItem value="manufacturing">Manufacturing & Supply Chain</SelectItem>
                        <SelectItem value="legal">Legal & Compliance</SelectItem>
                        <SelectItem value="media">Media & Entertainment</SelectItem>
                        <SelectItem value="hospitality">Hospitality & Travel</SelectItem>
                        <SelectItem value="transportation">Logistics & Transportation</SelectItem>
                        <SelectItem value="government">Government & Public Sector</SelectItem>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="corporate">Corporate</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                </Select>
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
                                "Brand Guardian Agent"
                            ].map((agent) => (
                                <div key={agent} className="flex items-center space-x-2">
                                    <Checkbox id={agent.replace(/\s+/g, '-').toLowerCase()} name="agents" />
                                    <label htmlFor={agent.replace(/\s+/g, '-').toLowerCase()} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{agent}</label>
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
                                "Training & Development Facilitator Agent"
                            ].map((agent) => (
                                <div key={agent} className="flex items-center space-x-2">
                                    <Checkbox id={agent.replace(/\s+/g, '-').toLowerCase()} name="agents" />
                                    <label htmlFor={agent.replace(/\s+/g, '-').toLowerCase()} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{agent}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="other-agent" name="other-agent" />
                        <label htmlFor="other-agent" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Other</label>
                    </div>
                </div>
            </div>
            <div>
                <Label htmlFor="notes">Additional Notes (optional)</Label>
                <Textarea id="notes" name="notes" placeholder="Any specific questions or preferences?" />
            </div>
            <Button type="submit" className="w-full bg-[#005F73] hover:bg-[#005F73]/90 text-white font-bold">Submit</Button>
        </form>
    )
}

export default Form
