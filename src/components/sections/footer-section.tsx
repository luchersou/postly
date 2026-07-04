import { Logo } from "@/components/shared/logo";
import { TiktokIcon } from "@/components/shared/icons/tiktok-icon";
import { YoutubeIcon } from "@/components/shared/icons/youtube-icon";
import { LinkedinIcon } from "@/components/shared/icons/linkedin-icon";
import { InstagramIcon } from "@/components/shared/icons/instagram-icon";
import { XIcon } from "@/components/shared/icons/x-icon";

export function Footer() {
  return (
    <div className="bg-muted px-4 pt-20">
      <footer className="mx-auto w-full max-w-[1350px] overflow-hidden rounded-tl-3xl rounded-tr-3xl bg-card px-4 pt-8 font-sans text-card-foreground sm:px-8 md:px-16 lg:px-28 lg:pt-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:gap-12 lg:grid-cols-6">
          <div className="space-y-6 lg:col-span-3">
            <Logo />
            <p className="max-w-96 text-sm/6 text-muted-foreground">
              Postly helps creators and teams grow on social media with
              AI-powered scheduling, multi-platform publishing and deep
              analytics — all in one place.
            </p>
            <div className="order-1 flex gap-5 md:order-2 md:gap-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="X">
                <XIcon />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="YouTube">
                <YoutubeIcon />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="TikTok">
                <TiktokIcon />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 items-start gap-8 md:grid-cols-3 md:gap-12 lg:col-span-3 lg:gap-28">
            {/* Product */}
            <div>
              <h3 className="mb-4 text-sm font-medium text-foreground">Product</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Features</a></li>
                <li><a href="#" className="hover:text-foreground">Integrations</a></li>
                <li><a href="#" className="hover:text-foreground">Pricing</a></li>
                <li><a href="#" className="hover:text-foreground">Changelog</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="mb-4 text-sm font-medium text-foreground">Resources</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Blog</a></li>
                <li><a href="#" className="hover:text-foreground">Documentation</a></li>
                <li><a href="#" className="hover:text-foreground">Guides</a></li>
                <li><a href="#" className="hover:text-foreground">API Reference</a></li>
              </ul>
            </div>

            {/* Company */}
            <div className="col-span-2 md:col-span-1">
              <h3 className="mb-4 text-sm font-medium text-foreground">Company</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">About</a></li>
                <li className="flex items-center gap-2">
                  <a href="#" className="hover:text-foreground">Careers</a>
                  <span className="rounded-full border border-border bg-muted px-2 py-0.5 text-[11px] text-muted-foreground">
                    HIRING
                  </span>
                </li>
                <li><a href="#" className="hover:text-foreground">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-foreground">Terms of Service</a></li>
                <li><a href="#" className="hover:text-foreground">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 flex max-w-7xl items-center justify-between border-t border-border pt-4">
          <p className="text-sm text-muted-foreground">© 2026 Postly. All rights reserved.</p>
          <p className="text-sm text-muted-foreground">Made with ❤️ for creators worldwide.</p>
        </div>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-full max-h-64 w-full max-w-3xl rounded-full bg-muted blur-[100px]" />
          <div className="mt-6 text-center text-[clamp(3rem,15vw,15rem)] leading-[0.7] font-extrabold text-transparent [-webkit-text-stroke:1px_var(--border)]">
            Postly
          </div>
        </div>
      </footer>
    </div>
  );
}