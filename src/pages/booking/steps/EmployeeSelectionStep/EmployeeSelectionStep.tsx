import { Group, Text, Avatar, MultiSelect, Stack, ScrollArea, Box } from "@mantine/core";
import { IconUserCog } from "@tabler/icons-react";
import { useState } from 'react';
import styles from '../../BookingStepper.module.scss';
import { StepsFooter } from "../../../../components";

const employees = [
  { value: 'any', label: 'Any Available', avatar: null },
  // { value: 'Natalia', label: 'Natalia Novikova', avatar: 'https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/472668842_3612532575704954_8099608643304190020_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=UTsJ3vhMH9IQ7kNvwGUSdz1&_nc_oc=AdnvrzF6cYdDsay7yZN58n8MkGBDwCyaZDyb452hv5-R_VJ03hOcYG79jDdQMEYZ1JLw5puuvHfiMKUHQo6KjE2U&_nc_zt=23&_nc_ht=scontent-hou1-1.xx&_nc_gid=UH7JB0ewgxiMc58qsj1RPQ&oh=00_AfKZ_TckRnkFM-IRIflWAOjsZSzt9TPXTr3IpmXGhgBOhQ&oe=6843E267' }
];

const employeeData: any = employees.map((emp) => ({
  value: emp.value,
  label: (
    <Group>
      {emp.avatar ? <Avatar src={emp.avatar} size="xs" /> : <Avatar size="xs" radius="xl">?</Avatar>}
      <Text>{emp.label}</Text>
    </Group>
  ),
}));

export const EmployeeSelectionStep = ({ form, setForm, nextStep, prevStep }: any) => {
  const [error, setError] = useState(false);

  const handleNext = () => {
    if (form.employees.length === 0) {
      setError(true);
    } else {
      setError(false);
      nextStep();
    }
  };


  const toggleStaff = (value: string) => {
    setForm((prev: any) => {
      const newStaff = prev.employees.includes(value)
        ? prev.employees.filter((s: any) => s !== value)
        : [...prev.employees, value];
      return { ...prev, employees: newStaff };
    });
  };

  return (
    <div className={styles.formStep}>
      <Group gap={4} mb="sm">
        <IconUserCog size={16} />
        <Text fw={500}>Select preferred employees <Text span c="red">*</Text></Text>
      </Group>

      <MultiSelect
        label="Choose preferred staff"
        placeholder="Search or select staff"
        searchable
        data={employees}
        value={form.employees}
        onChange={(employees) => setForm({ ...form, employees })}
      />

      <Box mt="md">
        <Text size="sm" mb="xs">
          Or select from the list below:
        </Text>
        <ScrollArea h={120}>
          <Group gap="xs" wrap="wrap">
            {employees.map((employee: any) => (
              <Stack
                key={employee.value}
                align="center"
                gap={4}
                onClick={() => toggleStaff(employee.value)}
                style={{
                  cursor: 'pointer',
                  border:
                    form.employees?.includes(employee.value) && employee.value !== 'any'
                      ? '2px solid hsl(43, 100%, 68%)'
                      : '1px solid #ccc',
                  padding: 8,
                  borderRadius: 8,
                  width: 80,
                  textAlign: 'center',
                }}
              >
                <Avatar
                  src={employee.avatar}
                  alt={employee.label}
                  radius="xl"
                  size="md"
                  color="hsl(43, 100%, 68%)"
                />
                <Text size="xs">{employee?.label.split(' ')[0]}</Text>
              </Stack>
            ))}
          </Group>
        </ScrollArea>
      </Box>
      <StepsFooter onNext={handleNext} onBack={prevStep}/>
    </div>
  );
}
