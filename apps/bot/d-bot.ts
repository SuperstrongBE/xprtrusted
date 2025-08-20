import {Client, Events, GatewayIntentBits, IntentsBitField} from "discord.js";
import {initVerifyCommand} from "./discord/commands/init-command";
import {ActionRowBuilder, ButtonBuilder, ButtonStyle} from "discord.js";
// Create a new client instance
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers],
});

client.once(Events.ClientReady, async readyClient => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`);
  console.log(`Guilds ${readyClient.guilds.cache.keys().toArray()}`);
  const guilds = readyClient.guilds.cache.keys().toArray();
  for (const guild of guilds) {
    initVerifyCommand(guild);
  }
});

client.on(Events.GuildMemberAdd, async member => {
  const row = new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setCustomId("start-trustify")
      .setLabel("Start Challenge")
      .setStyle(ButtonStyle.Primary)
  );

  const message = `👋 Welcome <@${member.id}>!

To access epic content, please complete the **Trustify Challenge**.

Click the button below to begin.`;

  await member
    .createDM()
    .then(dm => dm.send({content: message, components: [row]}));
});

client.on("interactionCreate", async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "verify") {
    const discordId = interaction.user.id;
    const url = `https://myapp.xyz/?userid=${discordId}`;

    try {
      await interaction.user.send(
        `🚀 Here’s your personal Trustify Challenge link:\n${url}`
      );
      await interaction.reply({
        content: "📬 I sent you a DM with your personal challenge link!",
        ephemeral: true, // only visible to the user
      });
    } catch (err) {
      console.error("❌ Could not send DM", err);
      await interaction.reply({
        content:
          "⚠️ I couldn’t send you a DM. Please enable DMs from server members.",
        ephemeral: true,
      });
    }
  }
});

client.login(process.env.DISCORD_BOT_TOKEN!);
