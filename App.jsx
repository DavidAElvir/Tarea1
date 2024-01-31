import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

function Profile({ name, image, birthdate, hobbies, description, onBack }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.birthdate}>Fecha de nacimiento: {birthdate}</Text>
      <Text style={styles.hobbiesTitle}>Pasatiempos:</Text>
      <View style={styles.hobbiesContainer}>
        {hobbies.map((hobby, index) => (
          <Text key={index} style={styles.hobby}>
            {hobby}
          </Text>
        ))}
      </View>
      <Text style={styles.description}>{description}</Text>
      <TouchableOpacity style={styles.button} onPress={onBack}>
        <Text style={styles.buttonText}>Regresar</Text>
      </TouchableOpacity>
    </View>
  );
}

function ProfileMenu() {
  const [selectedProfile, setSelectedProfile] = useState(0);

  const profiles = [
    {
      name: 'David Alejandro Elvir Avila',
      image: 'https://lh3.googleusercontent.com/a/ACg8ocIeLZ92HSqTVX22gKhYzBJU_OBKmZZVKu9HmCFNWqrbtA=s360-c-no',
      birthdate: '23/04/1996',
      hobbies: ['Video Juegos', 'Vehiculos', 'Futbol'],
      description: 'Apasionado por la tecnología y los deportes. Disfruto de explorar nuevas tecnologías y jugar videojuegos en mi tiempo libre.',
    },
    {
      name: 'Andrew Tate',
      image: 'https://i.guim.co.uk/img/media/59c1b14b1677cc33e27967cf6b11c8fd99a93761/0_102_1080_648/master/1080.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=6acd9946cd3344786ad2485e3a10b585',
      birthdate: '01/12/1986',
      hobbies: ['Kickboxing', 'Autos', 'Negocios'],
      description: 'Empresario y campeón de kickboxing. Amante de los negocios y las actividades físicas. Constantemente en busca de nuevos desafíos.',
    },
  ];

  const handleBack = () => {
    setSelectedProfile(0);
  };

  return (
    <View style={styles.container}>
      {selectedProfile === 0 && (
        <>
          <Text style={styles.menuTitle}>Menú Principal</Text>
          <View style={styles.buttonsContainer}>
            {profiles.map((profile, index) => (
              <TouchableOpacity
                key={index}
                style={styles.profileButton}
                onPress={() => setSelectedProfile(index + 1)}
              >
                <Text style={styles.buttonText}>{profile.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </>
      )}
      {selectedProfile > 0 && (
        <Profile
          name={profiles[selectedProfile - 1].name}
          image={profiles[selectedProfile - 1].image}
          birthdate={profiles[selectedProfile - 1].birthdate}
          hobbies={profiles[selectedProfile - 1].hobbies}
          description={profiles[selectedProfile - 1].description}
          onBack={handleBack}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 24,
    marginBottom: 10,
  },
  birthdate: {
    fontSize: 18,
    marginBottom: 10,
  },
  hobbiesTitle: {
    fontSize: 20,
    marginBottom: 10,
  },
  hobbiesContainer: {
    width: '80%',
  },
  hobby: {
    fontSize: 16,
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  buttonsContainer: {
    width: '60%',
    marginTop: 20,
  },
  profileButton: {
    backgroundColor: '#2ecc71',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  menuTitle: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default ProfileMenu;
