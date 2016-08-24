'use strict'

module.exports = [
  'BASE',
  { path: '/alert', text: 'Alert', component: require('./pages/alert.jsx') },
  { path: '/button', text: 'Button', component: require('./pages/button.jsx') },
  { path: '/buttonGroup', text: 'ButtonGroup', component: require('./pages/buttonGroup.jsx') },
  { path: '/dropdown', text: 'Dropdown', component: require('./pages/dropdown.jsx') },
  { path: '/icon', text: 'Icon', component: require('./pages/icon.jsx') },
  { path: '/image', text: 'Image', component: require('./pages/image.jsx') },
  { path: '/lang', text: 'Lang', component: require('./pages/lang.jsx') },
  { path: '/switch', text: 'Switch', component: require('./pages/switch.jsx') },
  { path: '/tag', text: 'Tag', component: require('./pages/tag.jsx') },
  'LAYOUT',
  { path: '/breadcrumb', text: 'Breadcrumb', component: require('./pages/breadcrumb.jsx')},
  { path: '/grid', text: 'Grid', component: require('./pages/grid.jsx') },
  { path: '/nav', text: 'Nav', component: require('./pages/nav.jsx')},
  { path: '/card', text: 'Card', component: require('./pages/card.jsx')},
  'FORM',
  { path: '/form', text: 'Form', component: require('./pages/form.jsx') },
  { path: '/formitem', text: 'FormItem', component: require('./pages/formItem.jsx') },
  { path: '/formControl', text: 'FormControl', component: require('./pages/formControl.jsx') },
  { path: '/checkbox', text: 'Checkbox', component: require('./pages/checkbox.jsx') },
  { path: '/checkboxGroup', text: 'CheckboxGroup', component: require('./pages/checkboxGroup.jsx') },
  { path: '/datepicker', text: 'Datepicker', component: require('./pages/datepicker.jsx') },
  { path: '/input', text: 'Input', component: require('./pages/input.jsx') },
  { path: '/textArea', text: 'Textarea', component: require('./pages/textArea.jsx') },
  { path: '/radioGroup', text: 'RadioGroup', component: require('./pages/radioGroup.jsx') },
  { path: '/rating', text: 'Rating', component: require('./pages/rating.jsx') },
  { path: '/select', text: 'Select', component: require('./pages/select.jsx') },
  { path: '/tree', text: 'Tree', component: require('./pages/tree.jsx') },
  { path: '/upload', text: 'Upload', component: require('./pages/upload.jsx') },
  'COMMON',
  { path: '/filter', text: 'Filter', component: require('./pages/filter.jsx') },
  { path: '/pagination', text: 'Pagination', component: require('./pages/pagination.jsx') },
  { path: '/progress', text: 'Progress', component: require('./pages/progress.jsx') },
  { path: '/mask', text: 'Mask', component: require('./pages/mask.jsx') },
  { path: '/modal', text: 'Modal', component: require('./pages/modal.jsx') },
  { path: '/message', text: 'Message', component: require('./pages/message.jsx') },
  { path: '/spin', text: 'Spin', component: require('./pages/spin.jsx') },
  { path: '/timeago', text: 'TimeAgo', component: require('./pages/timeago.jsx')},
  { path: '/tooltip', text: 'Tooltip', component: require('./pages/tooltip.jsx')},
  { path: '/table', text: 'Table', component: require('./pages/table.jsx') },

  'HIGHERORDER',
  { path: '/fetch', text: 'Fetch', component: require('./pages/fetch.jsx') }
]
