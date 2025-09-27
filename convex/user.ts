import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const CreateNewUser = mutation({
  args: {
    email: v.string(),
    name: v.string(),
    imageUrl: v.string(),
  },
  handler: async (ctx, args) => {
    const users = await ctx.db
      .query("UserTable")
      .filter((q) => q.eq(q.field("email"), args.email))
      .collect();
    if (users.length === 0) {
      const newUser = await ctx.db.insert("UserTable", {
        name: args.name,
        email: args.email,
        imageUrl: args.imageUrl,
      });
      return newUser;
    }

    return users[0];
  },
});
