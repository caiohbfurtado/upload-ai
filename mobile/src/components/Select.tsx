import { ChevronDown } from 'lucide-react-native'
import { View } from 'react-native'
import DropdownSelect from 'react-native-input-select'
import colors from 'tailwindcss/colors'
import { Label } from './Label'

type SelectOptionProps = {
  label: string
  value: string
}

type Props = {
  selected: string
  options: SelectOptionProps[]
  onValueChange?: (value: string) => void
  label?: string
  disabled?: boolean
  placeholder?: string
}

export function Select({
  onValueChange,
  options,
  selected,
  label,
  placeholder,
  disabled = false,
}: Props) {
  return (
    <View
      className="w-full"
      {...(disabled && { style: { pointerEvents: 'none' } })}
    >
      {label && <Label label={label} />}

      <DropdownSelect
        label="Country"
        placeholder={placeholder}
        options={options}
        selectedValue={selected}
        onValueChange={(value: string) => {
          onValueChange?.(value)
        }}
        dropdownStyle={{
          backgroundColor: 'transparent',
          borderColor: disabled ? colors.zinc[600] : colors.zinc[300],
        }}
        placeholderStyle={{
          color: colors.zinc[400],
          fontSize: 16,
          fontFamily: 'Inter_400Regular',
        }}
        selectedItemStyle={{
          color: disabled ? colors.zinc[600] : colors.zinc[300],
          fontSize: 16,
          fontFamily: 'Inter_700Bold',
        }}
        labelStyle={{ display: 'none' }}
        dropdownIcon={
          <ChevronDown
            color={disabled ? colors.zinc[600] : colors.zinc[300]}
            size={18}
          />
        }
        dropdownIconStyle={{
          height: 60,
          top: 0,
          bottom: 0,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        checkboxComponentStyles={{
          checkboxStyle: {
            backgroundColor: colors.yellow[500],
            borderColor: colors.zinc[800],
          },
          checkboxLabelStyle: { color: colors.zinc[800] },
        }}
        primaryColor={'yellow'}
      />
    </View>
  )
}
