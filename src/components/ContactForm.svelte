<script lang="ts">
  import { toast } from "svelte-sonner";
  import { contactForm, formInput, formLabel } from "./connect.css";
  import { link } from "./ui/link.css";
  import type { EventHandler } from "svelte/elements";

  const handleSubmit: EventHandler<SubmitEvent, HTMLFormElement> = (e) => {
    e.preventDefault();
    toast.success("Thanks! I'll be in touch.");
    e.currentTarget.reset();
  };
</script>

<form class={contactForm} onsubmit={handleSubmit}>
  <h2>Let's Connect</h2>
  <p>Reach out below for inquiries, quotes, or collaborations.</p>
  <label class={formLabel}>
    Name
    <input
      class={formInput}
      type="text"
      name="name"
      placeholder="e.g. Katie Haus"
      required
      aria-required="true"
      aria-label="Name"
    />
  </label>
  <label class={formLabel}>
    Email
    <input
      class={formInput}
      type="email"
      name="email"
      placeholder="e.g. kathouse@gmail.com"
      required
      aria-required="true"
      aria-label="Email"
    />
  </label>
  <button class={link} type="submit">Contact Me</button>
</form>
