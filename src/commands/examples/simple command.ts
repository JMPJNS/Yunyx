import type { CommandInteraction, Message } from 'discord.js'
import {
  SimpleCommandMessage, SimpleCommandOption, SimpleCommandOptionType,
  Discord,
  SimpleCommand,
  Slash
} from 'discordx'

@Discord()
export class Example {
  @SimpleCommand('hello', { aliases: ['hi'] })
  hello (command: SimpleCommandMessage): void {
    command.message.reply(`👋 ${command.message.member}`)
  }

  // make single handler for simple and slash command
  likeIt (command: CommandInteraction | Message): void {
    command.reply('I like it, Thanks')
  }

  @SimpleCommand('sum', { argSplitter: '+' })
  sum (
        @SimpleCommandOption('num1', { type: SimpleCommandOptionType.Number })
          num1: number | undefined,
        @SimpleCommandOption('num2', { type: SimpleCommandOptionType.Number })
          num2: number | undefined,
          command: SimpleCommandMessage
  ): void {
    if (!num1 || !num2) {
      command.sendUsageSyntax()
      return
    }
    command.message.reply(`total = ${num1 + num2}`)
  }

  @SimpleCommand('like-it')
  simpleLikeIt (command: SimpleCommandMessage): void {
    this.likeIt(command.message)
  }

  @Slash('like-it')
  slashLikeIt (command: CommandInteraction): void {
    this.likeIt(command)
  }
}
