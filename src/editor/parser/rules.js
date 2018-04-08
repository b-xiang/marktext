/* eslint-disable no-useless-escape */
export const beginRules = {
  'hr': /^(\*{3,}$|^\-{3,}$|^\_{3,}$)/,
  'code_fense': /^(`{3,})([^`]*)$/,
  'header': /(^\s{0,3}#{1,6})(?!#)/,
  'display_math': /^(\$\$)([^\$]*?[^\$\\])(\\*)\1$/
}

export const inlineRules = {
  'backlash': /^(\\)([\\`*{}\[\]()#+\-.!_>~:\|]\<\>)/,
  'strong': /^(\*\*|__)(?=\S)([\s\S]*?[^\s\*\\])(\\*)\1(?!(\*|_))/, // can nest
  'em': /^(\*|_)(?=\S)([\s\S]*?[^\s\*\\])(\\*)\1(?!\1)/, // can nest
  'inline_code': /^(`{1,3})([^`]+?|.{2,})\1/,
  'image': /^(\!\[)(.*?)(\\*)\]\((.*?)(\\*)\)/,
  'link': /^(\[)((?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*?)(\\*)\]\((.*?)(\\*)\)/, // can nest
  'emoji': /^(:)([^:\\]+?)\1/,
  'del': /^(~{2})(?=\S)([\s\S]*?\S)(\\*)\1/, // can nest
  'auto_link': /^(https?:\/\/[^\s]+)(?=\s|$)/,
  'inline_math': /^(\$)([^\$]*?[^\$\\])(\\*)\1(?!\1)/,
  'tail_header': /^(#{1,})(\s*)$/,
  'a_link': /^(<a[\s\S]*href\s*=\s*("|')(.+?)\2(?=\s|>)[\s\S]*(?!\\)>)([\s\S]*)(<\/a>)/, // can nest
  'html_image': /^(<img\s([\s\S]*?src[\s\S]+?)(?!\\)>)/,
  'html_tag': /^(<\/?[a-zA-Z\d-]+[\s\S]*?(?!\\)>)/
}
/* eslint-enable no-useless-escape */
