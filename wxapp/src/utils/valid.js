export function isPhoneNumber(phone) {
  const reg = /^(((13[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(17[3-8]{1})|(18[0-9]{1})|(19[0-9]{1})|(14[5-7]{1}))+\d{8})$/
  return reg.test(phone)
}

export function validateIDCard(idcard) {
  let tip = ''
  let pass = true
  const city = {
    11: '北京',
    12: '天津',
    13: '河北',
    14: '山西',
    15: '内蒙古',
    21: '辽宁',
    22: '吉林',
    23: '黑龙江 ',
    31: '上海',
    32: '江苏',
    33: '浙江',
    34: '安徽',
    35: '福建',
    36: '江西',
    37: '山东',
    41: '河南',
    42: '湖北 ',
    43: '湖南',
    44: '广东',
    45: '广西',
    46: '海南',
    50: '重庆',
    51: '四川',
    52: '贵州',
    53: '云南',
    54: '西藏 ',
    61: '陕西',
    62: '甘肃',
    63: '青海',
    64: '宁夏',
    65: '新疆',
    71: '台湾',
    81: '香港',
    82: '澳门',
    91: '国外 '
  }
  if (
    !idcard ||
    !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(
      idcard
    )
  ) {
    tip = '身份证号格式错误'
    pass = false
  } else if (!city[idcard.substr(0, 2)]) {
    tip = '地址编码错误'
    pass = false
  } else {
    // 18位身份证需要验证最后一位校验位
    // 校验暂时不做 因为生活中确实存在身份证账号错误的人
    // if (idcard.length === 18) {
    //   idcard = idcard.split('') // ∑(ai×Wi)(mod 11)
    //   // 加权因子
    //   let factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
    //   // 校验位
    //   let parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2]
    //   let sum = 0
    //   let ai = 0
    //   let wi = 0
    //   for (let i = 0; i < 17; i++) {
    //     ai = idcard[i]
    //     wi = factor[i]
    //     sum += ai * wi
    //   }
    //   if (parity[sum % 11].toString() !== idcard[17]) {
    //     tip = '校验位错误'
    //     pass = false
    //   }
    // }
  }
  return { result: pass, msg: tip }
}