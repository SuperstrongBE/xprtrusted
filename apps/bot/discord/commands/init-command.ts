import {REST, Routes, SlashCommandBuilder} from "discord.js";

export const initVerifyCommand = async (guildId: string) => {
  const commands = [
    new SlashCommandBuilder()
      .setName("verify")
      .setDescription(
        "Start the Trustify Challenge to access private channels"
      ),
  ].map(command => command.toJSON());

  const rest = new REST({version: "10"}).setToken(
    process.env.DISCORD_BOT_TOKEN!
  );

  (async () => {
    try {
      console.log("⏳ Registering slash command...");
      await rest.put(
        Routes.applicationGuildCommands(
          process.env.DISCORD_CLIENT_ID!,
          guildId
        ),
        {body: commands}
      );
      console.log(`✅ Slash command registered for guild ${guildId}`);
    } catch (error) {
      console.error(error);
    }
  })();
};
