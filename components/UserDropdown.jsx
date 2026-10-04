"use client";

import { UserButton } from "@clerk/nextjs";
import { Refrigerator, Cookie } from "lucide-react";
import React from "react";

const UserDropdown = () => {
  return (
    <UserButton>
      <UserButton.MenuItems>
        <UserButton.Link
          label="My Recipes"
          labelIcon={<Cookie size={16} />}
          href="/recipes"
        />
        <UserButton.Link
          label="My Pantry"
          labelIcon={<Refrigerator size={16} />}
          href="/pantry"
        />
        <UserButton.Action label="manageAccount" />
      </UserButton.MenuItems>
    </UserButton>
  );
};

export default UserDropdown;



// Set up this Neon project in the current working directory.

// 1. `npm i -g neon@latest && neon login`
// 2. `neon skills -y`
// 3. `neon mcp -y`
// 4. `neon link --project-id frosty-haze-01168900 --branch production -y`
// 5. `neon config init`
// 6. Update `neon.ts`:

// ```ts
// import { defineConfig } from "@neon/config/v1";

// export default defineConfig({});
// ```

// 7. `neon deploy`