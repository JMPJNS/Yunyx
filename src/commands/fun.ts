import { CommandInteraction, GuildMember, User } from 'discord.js'
import { Discord, Slash, SlashGroup, SlashOption } from 'discordx'

@Discord()
@SlashGroup({ name: 'fun' })
export class FunCommands {
  @SlashGroup('fun')
  @Slash('sum')
  sum (@SlashOption('x') x: number, @SlashOption('y') y: number, interaction: CommandInteraction) {
    interaction.reply(String(x + y))
  }

  @SlashGroup('fun')
  @Slash('sub')
  sub (@SlashOption('x') x: number, @SlashOption('y') y: number, interaction: CommandInteraction) {
    interaction.reply(String(x - y))
  }

  @SlashGroup('fun')
  @Slash('hi')
  hi (@SlashOption('member') member: GuildMember, interaction: CommandInteraction) {
    interaction.reply(member.displayName)
  }
}
