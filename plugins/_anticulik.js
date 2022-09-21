let fs = require('fs')
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return
    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('Undangan untuk bergabung') || m.text.startsWith('Invitation to join') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
    let teks = `「 WH-MODS-BOT-V1 」

    ╭━━━━「 SEWA 」
    ┊⫹⫺ Hemat: 5k/grup (1 minggu)
    ┊⫹⫺ Normal: 15k/grup (1 bulan)
    ┊⫹⫺ Standar: 30k/grup (2 bulan)
    ┊⫹⫺ Pro: 35k/grup (4 bulan)                                                      
    ┊⫹⫺ Vip: = 65k/grup (12 bulan)
    ╰═┅═━––––––๑
    
    ╭━━━━「 PREMIUM 」
    ┊⫹⫺ Hemat: 5k (1 minggu)
    ┊⫹⫺ Normal: 20k (1 bulan)
    ┊⫹⫺ Pro: 40k (4 bulan)
    ┊⫹⫺ Vip: 50k (8 bulan)                                               
    ╰═┅═━––––––๑
    
    ⫹⫺ PAYMENT:
    • Pulsa Telkomsel: [081332995497]
    • Dana: [081332995497]
    • Gopay: [081332995497]
    
    Nomor Owner :
    wa.me/6282261065144
    
    ▌│█║▌║▌║║▌║▌║█│▌
    
    #BY FIN BOTZ`
    this.reply(m.chat, teks, m)
    const data = global.owner.filter(([id, isCreator]) => id && isCreator)
    this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
    }
}

export default handler
