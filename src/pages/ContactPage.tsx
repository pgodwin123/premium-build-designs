import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

// [PLACEHOLDER] Update service areas
const serviceAreas = [
  "London",
  "Surrey",
  "Kent",
  "Essex",
  "Hertfordshire",
  "Berkshire",
];

// [PLACEHOLDER] Update project types
const projectTypes = [
  "Extension",
  "Loft Conversion",
  "New Build",
  "Renovation",
  "Kitchen",
  "Bathroom",
  "Garage Conversion",
  "Other",
];

// [PLACEHOLDER] Update contact details
const PHONE_NUMBER = "07882 075524";
const PHONE_HREF = "tel:07882075524";
const EMAIL = "info@odcontractors.co.uk";
const WHATSAPP_HREF = "https://wa.me/447882075524";

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    postcode: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Quote Request Submitted!",
      description: "We'll be in touch within 24 hours to discuss your project.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      postcode: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Request a Free Quote
            </h1>
            {/* [PLACEHOLDER] Update page description */}
            <p className="text-lg md:text-xl text-muted-foreground">
              Ready to start your project? Fill out the form below and we'll get back to you 
              within 24 hours with a free, no-obligation quote.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form - Main Focus */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl border border-border p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Tell Us About Your Project
                </h2>
                <p className="text-muted-foreground mb-8">
                  {/* [PLACEHOLDER] Update form intro */}
                  Fill in the details below and we'll get back to you with a quote.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Your Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        required
                        className="h-14 text-base"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="07123 456789"
                        required
                        className="h-14 text-base"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="h-14 text-base"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Postcode *
                      </label>
                      <Input
                        name="postcode"
                        value={formData.postcode}
                        onChange={handleChange}
                        placeholder="SE1 1AA"
                        required
                        className="h-14 text-base"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Project Type *
                    </label>
                    <Select
                      value={formData.projectType}
                      onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                      required
                    >
                      <SelectTrigger className="h-14 text-base">
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        {projectTypes.map((type) => (
                          <SelectItem key={type} value={type.toLowerCase()}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Project Details
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, what you're looking to achieve, any specific requirements..."
                      rows={6}
                      className="resize-none text-base"
                    />
                  </div>

                  {/* Response time notice */}
                  <p className="text-center text-muted-foreground text-sm">
                    We respond within 24 hours
                  </p>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full amber-gradient h-16 text-lg font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        Submit Quote Request
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Quick Contact */}
              <div className="bg-card rounded-2xl border border-border p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Quick Contact
                </h3>
                <div className="space-y-6">
                  <a
                    href={PHONE_HREF}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        Call Us
                      </div>
                      <div className="text-muted-foreground">{PHONE_NUMBER}</div>
                    </div>
                  </a>

                  <a
                    href={`mailto:${EMAIL}`}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        Email Us
                      </div>
                      <div className="text-muted-foreground text-sm">{EMAIL}</div>
                    </div>
                  </a>

                  <a
                    href={WHATSAPP_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5 text-[#25D366]" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground group-hover:text-[#25D366] transition-colors">
                        WhatsApp
                      </div>
                      <div className="text-muted-foreground">Message us anytime</div>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Opening Hours</div>
                      {/* [PLACEHOLDER] Update opening hours */}
                      <div className="text-muted-foreground text-sm">
                        Mon-Fri: 8am - 6pm<br />
                        Sat: 9am - 2pm
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-card rounded-2xl border border-border p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Service Areas
                </h3>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">We Cover</div>
                    {/* [PLACEHOLDER] Update coverage area */}
                    <div className="text-muted-foreground text-sm">London & the South East</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {serviceAreas.map((area) => (
                    <span
                      key={area}
                      className="px-3 py-1 rounded-lg bg-secondary text-sm text-muted-foreground"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[400px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317716.6064683929!2d-0.43124089999999996!3d51.528735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1640000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(1) invert(0.92)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Service Area Map"
        />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background via-transparent to-transparent" />
      </section>
    </div>
  );
}
