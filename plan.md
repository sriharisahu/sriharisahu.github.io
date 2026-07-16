# Plan: Jekyll personal website and blog

The existing repository already contains a functional Jekyll site, so the most effective approach is to evolve it into a polished single-page personal website with a blog section and GitHub Pages-ready configuration rather than creating a new site from scratch.

## Scope
- Build a single-page homepage for Srihari Sankar Sahu that highlights 15 years of software development experience.
- Preserve and surface existing blog content from the posts collection while making the site feel like a personal website and blog.
- Keep the implementation compatible with GitHub Pages and Jekyll conventions.

## Implementation steps
1. Content structure and messaging
   - Define the homepage sections: hero, about, experience overview, core skills, selected projects, blog highlights, and contact.
   - Draft concise copy that positions Srihari as an experienced full-stack developer and writer.
   - Reuse existing profile details from the repository and update outdated contact or profile text where needed.

2. Homepage and layout refresh
   - Replace the current simple home page with a single-page landing experience that includes anchor navigation.
   - Update the default layout and shared include files so the header, footer, and page structure support a modern one-page experience.
   - Ensure the homepage remains clean and responsive on mobile and desktop.

3. Visual design and styling
   - Refine the Sass and layout styles for a professional personal-site look with clear typography, spacing, and section design.
   - Add styling for cards, call-to-action links, experience timeline blocks, and recent blog post previews.
   - Keep the design lightweight and GitHub Pages-friendly.

4. Blog integration
   - Add a blog section to the homepage that lists recent posts from the existing posts folder.
   - Ensure post pages render cleanly with the same shared layout and navigation.
   - Optionally add an archive or all-posts page if the existing content set is large enough.

5. GitHub Pages and Jekyll configuration
   - Review and update the site configuration for production use, including title, description, URL, and social metadata.
   - Confirm the site uses GitHub Pages-compatible settings and avoid unsupported plugins.
   - Verify the repository is ready for deployment from the main branch.

6. Validation and launch prep
   - Run the site locally with Jekyll and check that the homepage, blog listing, and individual posts render correctly.
   - Review links, navigation, and responsive behavior before publishing.
   - Prepare the repository for deployment by documenting any final content or configuration decisions.

## Relevant files
- [index.html](index.html)
- [_layouts/default.html](_layouts/default.html)
- [_includes/header.html](_includes/header.html)
- [_includes/footer.html](_includes/footer.html)
- [css/main.scss](css/main.scss)
- [_config.yml](_config.yml)
- [about.md](about.md)
- [contact.md](contact.md)
- [_posts](_posts)

## Verification
1. Run Jekyll locally and confirm the site builds successfully.
2. Review the homepage, navigation, and blog listing in a browser.
3. Confirm all internal links, social links, and contact details work as intended.


## Update 16 July @ 10:00
## Plan: Reframe the Jekyll site as a commercial AI consulting profile

The current site still reads as a general software-engineering profile, so the next step is to shift the messaging toward a business-facing AI consulting identity while keeping the existing Jekyll structure intact.

### Steps
1. Refresh the homepage messaging to emphasize AI consulting, business analytics, operations strategy, and practical decision support.
2. Update the About and Contact pages so they reinforce the consulting profile and include a clear LinkedIn link.
3. Add the LinkedIn profile link in the shared footer and ensure the site metadata reflects the new positioning.
4. Cross-reference relevant experience areas such as financial analytics, retail/Amazon FBA, SAP, and operational improvement where appropriate.
5. Build the site locally with Jekyll and verify that the updated content renders correctly.

### Relevant files
- [index.html](index.html) — homepage hero, about, experience, and contact sections.
- [about.md](about.md) — profile page copy and professional positioning.
- [contact.md](contact.md) — business-contact messaging and links.
- [_includes/footer.html](_includes/footer.html) — shared footer links.
- [_config.yml](_config.yml) — site title, description, and metadata.

### Verification
1. Run a local Jekyll build and confirm it completes without errors.
2. Review the generated pages to ensure the new messaging, LinkedIn link, and experience references are visible.
3. Check that the footer and contact pages all expose the same professional links.

### Scope
- Included: content rewrite, LinkedIn integration, experience cross-references, and local build verification.
- Excluded: redesigning the visual theme, adding new sections beyond the existing structure, or changing deployment configuration.
