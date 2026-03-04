import {createRoot} from 'react-dom/client'
const m=(
  <table>
    <tr>
      <th>class</th>
    </tr>
    <tr>
      <td>c</td>
    </tr>
    
  </table>
)
const k=(
  <ul>
    <li>mild</li>
    <li>tea powder1</li>
    <li>sugar</li>
  </ul>
)
createRoot(document.getElementById('root')).render(
  <div>
    {m}
    {k}
  </div>
)
